import { CiShare1 } from 'react-icons/ci'
import { FaRegCalendarAlt, FaRegComment } from 'react-icons/fa'
import { FaRegCircleUser, FaArrowLeftLong } from 'react-icons/fa6'

import { NavLink, useParams } from 'react-router-dom'
import { SidebarLatestPosts } from '../components/SidebarLatestPosts'
import { useContext, useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchData'
import { HorizontalCardPost } from '../components/HorizontalCardPost'
import { Context } from '../context/Context'
import { Pagination } from '../components/Pagination'

const apiUrl = import.meta.env.VITE_API_URL

export const DetailPage = () => {
  const { setCateId, arrowLeft, setArrowLeft } = useContext(Context)

  const [listLatestPost, setListLatestPost] = useState([])
  const [listPostsByCate, setListPostsByCate] = useState([])
  const [posts, setPosts] = useState({})
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const { slug } = useParams()

  const fetchDataBackend = async () => {
    try {
      const resLatestPost = await fetchData('http://127.0.0.1:8080/post')
      const resPosts = await fetchData(`http://127.0.0.1:8080/post/${slug}`)
      setPosts(resPosts)
      setListLatestPost(resLatestPost.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataBackend()
  }, [slug])

  useEffect(() => {
    if (posts?.category?.id) {
      const fetchPostsByCategory = async () => {
        try {
          const resPostsbyCate = await fetchData(`http://127.0.0.1:8080/posts/category/${posts?.category?.id}?page=${page}`)
          setListPostsByCate(resPostsbyCate.results)
          setTotalPages(Math.ceil(resPostsbyCate.count / 6))
        } catch (error) {
          console.log(error)
        }
      }

      fetchPostsByCategory()
    }
  }, [posts, page])

  return (
    <div className='min-h-screen bg-gray-50 pb-32'>
      {/* Main Content */}
      <main className='container mx-auto px-4 py-5 max-w-4xl'>
        <NavLink to={`/category/${posts?.category?.id}`} className='inline-block'>
          <div className='flex gap-2 cursor-pointer hover:underline items-center'>
            {arrowLeft && <FaArrowLeftLong />}
            <span
              onClick={() => {
                setCateId(posts?.category?.id)
                setArrowLeft(true)
              }}
              className='text-sm font-semibold text-gray-800 uppercase '
            >
              {posts?.category?.name}
            </span>
          </div>
        </NavLink>
        <h1 className='text-4xl font-bold text-gray-900 my-4'>{posts?.title}</h1>

        {/* Author and Metadata */}
        <div className='flex items-center gap-6 mb-8 text-sm text-gray-600'>
          <div className='flex items-center gap-2'>
            <FaRegCircleUser size={20} />
            <NavLink to={`/author/${posts?.author?.id}`} onClick={() => setCateId(null)}>
              <span className='cursor-pointer hover:underline uppercase'>
                {posts?.author?.user.first_name}&nbsp;{posts?.author?.user.last_name}
              </span>
            </NavLink>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegComment size={16} />
            <span>0</span>
          </div>
        </div>

        {/* Article Image */}
        <div className='my-8'>
          <img src={`${apiUrl + posts?.image}`} alt={posts?.title} className='w-full h-[490px] object-cover rounded-md' />
        </div>

        <div className='grid grid-cols-3 gap-3'>
          <div className='col-span-2'>
            <div className='flex items-center gap-4 text-sm text-gray-600 mb-8'>
              <div className='flex items-center gap-2'>
                <FaRegCalendarAlt size={16} />
                <span>{new Date(posts?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}</span>
              </div>

              <button className='ml-auto flex items-center gap-2 hover:text-gray-900'>
                <CiShare1 size={16} />
                <span>CHIA SẺ</span>
              </button>
            </div>
            {/* Content */}
            <div className='mt-12'>
              <div className='border-t pt-4'>
                <div className='py-6 text-lg'>
                  <div>{posts.content}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SidebarLatestPosts listLatestPost={listLatestPost} small />
          </div>
        </div>
        <div className='mt-32 grid grid-cols-1 gap-4'>
          <h2 className='text-2xl font-bold mb-3'>Các bài viết liên quan</h2>
          <hr />
          {listPostsByCate.map((post, index) => {
            return <>{post.id !== posts.id && <HorizontalCardPost key={index} post={post} apiUrl={apiUrl} noCategory />}</>
          })}
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </main>
    </div>
  )
}
