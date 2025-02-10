import { LatestNews } from '../components/LatestNews'
import { HomeLayoutA } from '../components/HomeLayoutA'
import { HomeLayoutB } from '../components/HomeLayoutB'
import { HomeLayoutC } from '../components/HomeLayoutC'
import { fetchData } from '../utils/fetchData'
import { useEffect, useState } from 'react'
import { VerticalCardPost } from '../components/VerticalCardPost'
import { fetchListPostsRandom } from '../utils/fetchListPostsRandom'

const apiUrl = import.meta.env.VITE_API_URL
const availableLayout = [HomeLayoutA, HomeLayoutB, HomeLayoutC]

export const HomePage = () => {
  const [listCate, setListCate] = useState([])
  const [listRandomPost, setListRandomPost] = useState([])
  const [listLatestPost, setListLatestPost] = useState([])
  const [postsByCategory, setPostsByCategory] = useState([])
  const [categoryComponentMap, setCategoryComponentMap] = useState({})

  const fetchDataBackend = async () => {
    try {
      const response = await fetchData('http://127.0.0.1:8080/category')
      const resLatestPost = await fetchData('http://127.0.0.1:8080/post')
      setListCate(response)
      setListLatestPost(resLatestPost.results)

      // Tạo ánh xạ động từ category sang component
      let dynamicMap = {}
      response.map((cate, index) => {
        dynamicMap[cate.id] = availableLayout[index % availableLayout.length]
      })
      setCategoryComponentMap(dynamicMap)
    } catch (error) {
      console.log(error)
    }
  }

  const postBelongsCate = async () => {
    let randomCateIds = []
    while (randomCateIds.length < 5) {
      if (listCate.length < 5) return
      const randomId = Math.floor(Math.random() * listCate.length)
      const cateId = listCate[randomId].id

      if (!randomCateIds.includes(cateId)) {
        randomCateIds.push(cateId)
      }
    }
    try {
      const posts = await fetchListPostsRandom(listCate)
      setListRandomPost(posts)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchPosts = async () => {
    const fetchedPosts = await Promise.all(
      listCate.map(async (item) => {
        const posts = await fetchData(`${apiUrl}/four-post/category/${item.id}`)
        return { categoryId: item.id, posts }
      })
    )
    setPostsByCategory(fetchedPosts)
  }

  useEffect(() => {
    fetchDataBackend()
  }, [])

  useEffect(() => {
    postBelongsCate()
    fetchPosts()
  }, [listCate])

  return (
    <>
      <div className='min-h-screen relative'>
        {/* Main Content */}
        <main className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div className='lg:col-span-1'>
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[0]} size='small' />
              <hr className='text-gray-300 mb-5' />
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[1]} size='small' />
            </div>
            <div className='lg:col-span-2'>
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[2]} size='large' />
            </div>
            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[3]} size='small' />
              <hr className='text-gray-300 mb-5' />
              <VerticalCardPost apiUrl={apiUrl} post={listRandomPost[4]} size='small' />
            </div>
          </div>
          <LatestNews listLatestPost={listLatestPost} apiUrl={apiUrl} />
          {postsByCategory.map(({ categoryId, posts }) => {
            const Component = categoryComponentMap[categoryId]
            return Component ? <Component apiUrl={apiUrl} posts={posts} /> : null
          })}
        </main>
      </div>
    </>
  )
}
