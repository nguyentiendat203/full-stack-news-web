import { FaRegUser, FaRegComment } from 'react-icons/fa'
import { LatestNews } from '../components/LatestNews'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import { HomeLayoutA } from '../components/HomeLayoutA'
import { HomeLayoutB } from '../components/HomeLayoutB'
import { HomeLayoutC } from '../components/HomeLayoutC'
import { fetchData } from '../utils/fetchData'
import { useEffect, useState } from 'react'
import { VerticalCardPost } from '../components/VerticalCardPost'

const apiUrl = import.meta.env.VITE_API_URL

export const HomePage = () => {
  const [listCate, setListCate] = useState([])
  const [listRandomPost, setListRandomPost] = useState([])
  const [listLatestPost, setListLatestPost] = useState([])

  const fetchDataBackend = async () => {
    try {
      const response = await fetchData('http://127.0.0.1:8080/category')
      const resLatestPost = await fetchData('http://127.0.0.1:8080/post')
      setListCate(response)
      setListLatestPost(resLatestPost.results)
    } catch (error) {
      console.log(error)
    }
  }

  const postBelongsCate = async () => {
    let randomCateIds = []
    while (randomCateIds.length < 3) {
      if (listCate.length < 3) return
      const randomId = Math.floor(Math.random() * listCate.length)
      const cateId = listCate[randomId].id

      if (!randomCateIds.includes(cateId)) {
        randomCateIds.push(cateId)
      }
    }
    try {
      const postPromises = randomCateIds.map((id) => {
        return fetchData(`http://127.0.0.1:8080/post/category/${id}`)
      })
      const posts = await Promise.all(postPromises)
      setListRandomPost(posts.flat())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataBackend()
  }, [])

  useEffect(() => {
    postBelongsCate()
  }, [listCate])

  return (
    <>
      <div className='min-h-screen relative'>
        {/* Top Header */}
        <Header />
        {/* Navigation */}
        <Navigation listCate={listCate} />

        {/* Main Content */}
        <main className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div className='lg:col-span-1'>
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[0]} imgHeight='44' titleSize='xl' />
              <hr className='text-gray-300 mb-5' />
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[1]} imgHeight='44' titleSize='xl' />
            </div>

            <div className='lg:col-span-2'>
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[2]} imgHeight='96' titleSize='3xl' />
            </div>
            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='bg-gray-50 p-2 rounded-md'>
                <h3 className='text-lg font-bold mb-2 text-center'>BÀI MỚI NHẤT</h3>
                {listLatestPost.length > 0 &&
                  listLatestPost.map((post, index) => {
                    return (
                      <>
                        <article key={index} className={index === listLatestPost.length - 1 ? 'py-2' : 'border-b py-2'}>
                          <span className='text-sm text-gray-700 uppercase font-semibold cursor-pointer hover:underline'>{post.category?.name}</span>
                          <h4 className='font-semibold my-1 line-clamp-2 cursor-pointer hover:underline'>{post.title}</h4>
                          <div className='flex items-center gap-2 text-gray-600 text-sm'>
                            <FaRegUser size={16} />
                            &#8226;
                            <span className='uppercase cursor-pointer hover:underline'>
                              {post.author?.user.first_name}&nbsp;{post.author?.user.last_name}
                            </span>
                            &#8226;
                            <span>{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            &#8226;
                            <FaRegComment size={16} />0
                          </div>
                        </article>
                      </>
                    )
                  })}
              </div>
            </div>
          </div>
          <LatestNews listLatestPost={listLatestPost} />
          <HomeLayoutA />
          <HomeLayoutB />
          <HomeLayoutC />
        </main>
      </div>
    </>
  )
}
