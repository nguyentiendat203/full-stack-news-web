import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/fetchData'
import { HorizontalCardPost } from '../components/HorizontalCardPost'
import { FaRegUser } from 'react-icons/fa'
import { Pagination } from '../components/Pagination'

const apiUrl = import.meta.env.VITE_API_URL

export const PostsByAuthor = () => {
  const [listPostsByAuthor, setListPostsByAuthor] = useState([])
  const [totalPosts, settotalPosts] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)

  const { id } = useParams()

  const fetchDataBackend = async () => {
    try {
      const resPosts = await fetchData(`${apiUrl}/author/posts/${id}?page=${page}`)
      setListPostsByAuthor(resPosts.results)
      settotalPosts(resPosts.count)
      setTotalPages(Math.ceil(resPosts.count / 6))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataBackend()
  }, [id, page])

  return (
    <>
      <div className='py-12 bg-gray-100 mb-10'>
        <p className='container mx-auto text-4xl font-bold flex items-center gap-2'>
          {listPostsByAuthor[0]?.author.avatar ? <img src={listPostsByAuthor[0]?.author.avatar} alt='' className='object-cover object-top rounded-full size-12' /> : <FaRegUser />}
          {listPostsByAuthor[0]?.author.user.first_name} {listPostsByAuthor[0]?.author.user.last_name}
        </p>
      </div>
      <div className='container mx-auto'>
        <h2 className='text-2xl mb-4 font-semibold'>{totalPosts} Bài viết</h2>
        <hr />
        <div className='mt-8 max-w-4xl'>
          <div className='grid grid-cols-1 gap-4'>
            {listPostsByAuthor.map((post) => {
              return (
                <>
                  <HorizontalCardPost apiUrl={apiUrl} post={post} key={post.id} noCategory />
                </>
              )
            })}
          </div>
        </div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  )
}
