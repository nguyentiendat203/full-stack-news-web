import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/fetchData'
import { HorizontalCardPost } from '../components/HorizontalCardPost'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'

const apiUrl = import.meta.env.VITE_API_URL

export const PostsByAuthor = () => {
  const [listPostsByAuthor, setListPostsByAuthor] = useState([])
  const [totalPosts, settotalPosts] = useState(0)

  const { id } = useParams()

  const fetchDataBackend = async () => {
    try {
      const resPosts = await fetchData(`${apiUrl}/author/posts/${id}`)
      setListPostsByAuthor(resPosts.results)
      settotalPosts(resPosts.count)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataBackend()
  }, [id])
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
        <div className='text-center my-12'>
          <nav aria-label='Pagination' className='isolate inline-flex -space-x-px rounded-md shadow-xs'>
            <a
              href='#'
              className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>Previous</span>
              <FaArrowLeft aria-hidden='true' className='size-5' />
            </a>

            <a
              href='#'
              aria-current='page'
              className='relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              1
            </a>
            <a
              href='#'
              className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              2
            </a>
            <a
              href='#'
              className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
            >
              3
            </a>

            <a
              href='#'
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>Next</span>
              <FaArrowRight aria-hidden='true' className='size-5' />
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}
