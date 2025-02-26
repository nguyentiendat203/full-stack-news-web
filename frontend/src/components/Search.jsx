import { useState, useEffect } from 'react'
import { FaRegUser, FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { useDebounce } from 'use-debounce'
import { VscLoading } from 'react-icons/vsc'

import { fetchData } from '../utils/fetchData'

const apiUrl = import.meta.env.VITE_API_URL

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [valueSearch] = useDebounce(searchQuery, 800)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [listPosts, setListPosts] = useState([])
  const [listAuthors, setListAuthors] = useState([])

  useEffect(() => {
    setLoading(false)
    // Reset page về 1 mỗi khi search thay đổi
    setPage(1)
    if (!valueSearch) {
      setListPosts([])
      setListAuthors([])
    }
  }, [valueSearch])

  useEffect(() => {
    const fetchDataBE = async () => {
      try {
        const res = await fetchData(`${apiUrl}/posts/search/${valueSearch || null}?page=${page}`)
        setListPosts((prevPosts) => (page === 1 ? res.results.posts : [...prevPosts, ...res.results.posts]))
        setListAuthors((prevAuthors) => (page === 1 ? res.results.authors : prevAuthors))
        setTotalPages(Math.ceil(res.count / 6))
      } catch (error) {
        console.log(error)
      }
    }

    fetchDataBE()
  }, [valueSearch, page])

  const hasResults = listAuthors.length > 0 || listPosts.length > 0

  const handleSearchClick = () => {
    setIsOpen(true)
  }

  return (
    <div className='relative'>
      <div onClick={handleSearchClick} className='flex items-center cursor-pointer w-48 px-3 py-2 text-gray-600 bg-gray-100 rounded-lg'>
        <FaSearch size={18} className=' mr-2' />
        <span className=' text-sm'>Tìm kiếm...</span>
      </div>

      {isOpen && (
        <div className='fixed backdrop-blur-sm inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center'>
          <div className='w-full max-w-xl bg-white mt-16 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto'>
            <div className='p-4'>
              <div className='relative'>
                {loading ? (
                  <span className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                    <VscLoading className='animate-spin h-5 w-5 mr-3' />
                  </span>
                ) : (
                  <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700' size={18} />
                )}

                <input
                  type='text'
                  placeholder='Search posts and authors...'
                  className='w-full pl-10 pr-4 py-2 text-sm focus:outline-none'
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setLoading(true)
                  }}
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setSearchQuery('')
                    setPage(1)
                  }}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  <IoMdClose size={22} />
                </button>
              </div>
            </div>
            <div className='border-t border-gray-100 text-gray-600 text-sm max-h-96 overflow-y-auto'>
              {valueSearch && !hasResults && (
                <div className='p-4'>
                  <p className='text-center'>
                    Không có kết quả cho: <b>{valueSearch}</b>
                  </p>
                </div>
              )}
            </div>

            {listAuthors.length > 0 && (
              <div className='p-4'>
                <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center'>Authors</h3>
                <div className='space-y-2'>
                  {listAuthors.map((author) => (
                    <NavLink
                      to={`/author/${author.id}`}
                      key={author.id}
                      className='flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer'
                      onClick={() => {
                        setListPosts([])
                        setIsOpen(false)
                        setSearchQuery('')
                      }}
                    >
                      {author.avatar ? <img src={apiUrl + author.avatar} className='w-10 h-10 rounded-full object-cover' /> : <FaRegUser />}

                      <span className='text-sm'>{author.full_name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

            {listPosts.length > 0 && (
              <div className='p-4 border-t border-gray-100'>
                <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center'>Posts</h3>
                <div className='space-y-2 font-semibold'>
                  {listPosts.map((post, index) => (
                    <>
                      <NavLink
                        to={`/posts/${post?.slug}`}
                        key={index}
                        className='block p-2 hover:bg-gray-200 rounded-lg cursor-pointer'
                        onClick={() => {
                          setListPosts([])
                          setIsOpen(false)
                          setSearchQuery('')
                        }}
                      >
                        <span className='text-sm'>{post.title}</span>
                      </NavLink>
                    </>
                  ))}
                  {totalPages > 1 && page < totalPages && (
                    <div className='my-8'>
                      <button onClick={() => setPage(page < totalPages && page + 1)} className='block w-full p-2 border border-gray-300 rounded hover:bg-gray-300'>
                        Show more
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
