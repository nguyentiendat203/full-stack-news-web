import { FaRegUser, FaRegComment } from 'react-icons/fa'
import { LatestNews } from '../components/LatestNews'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import { HomeLayoutA } from '../components/HomeLayoutA'
import { HomeLayoutB } from '../components/HomeLayoutB'
import { HomeLayoutC } from '../components/HomeLayoutC'
import { useEffect } from 'react'

export const HomePage = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/post')
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      console.log(await response.json())
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
    console.log('sdas')
  }, [])
  return (
    <>
      <div className='min-h-screen relative'>
        {/* Top Header */}
        <Header />
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            <div className='lg:col-span-1'>
              <article className='mb-4'>
                <img
                  src='https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                  alt='Malaysia ASEAN'
                  className='w-full h-44 object-cover rounded-md'
                />
                <div className='my-2'>
                  <span className='text-sm font-semibold text-gray-800 uppercase'>QUỐC TẾ</span>
                </div>
                <h2 className='text-xl font-bold mb-3'>Malaysia sẽ lèo lái con thuyền ASEAN ra sao?</h2>
                <div className='flex items-center gap-2 text-gray-600 text-sm'>
                  <FaRegUser size={16} />
                  &#8226;
                  <span className='uppercase'>KHANH LINH</span>
                  &#8226;
                  <span>FEB 4, 2025</span>
                  &#8226;
                  <FaRegComment size={16} />0
                </div>
              </article>
              <hr className='text-gray-300 mb-5' />
              <article className='mb-4'>
                <img
                  src='https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                  alt='Malaysia ASEAN'
                  className='w-full h-44 object-cover rounded-md'
                />
                <div className='my-2'>
                  <span className='text-sm font-semibold text-gray-800 uppercase'>QUỐC TẾ</span>
                </div>
                <h2 className='text-xl font-bold mb-3'>Malaysia sẽ lèo lái con thuyền ASEAN ra sao?</h2>
                <div className='flex items-center gap-2 text-gray-600 text-sm'>
                  <FaRegUser size={16} />
                  &#8226;
                  <span className='uppercase'>KHANH LINH</span>
                  &#8226;
                  <span>FEB 4, 2025</span>
                  &#8226;
                  <FaRegComment size={16} />0
                </div>
              </article>
            </div>
            {/* Main Article */}

            <div className='lg:col-span-2'>
              <article className='mb-8'>
                <img
                  src='https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                  alt='Malaysia ASEAN'
                  className='w-full h-96 object-cover rounded-md'
                />
                <div className='my-2'>
                  <span className='text-sm font-semibold text-gray-800 uppercase'>QUỐC TẾ</span>
                </div>
                <h2 className='text-3xl font-bold mb-4'>Malaysia sẽ lèo lái con thuyền ASEAN ra sao?</h2>
                <div className='flex items-center gap-2 text-gray-600 text-sm'>
                  <FaRegUser size={16} />
                  &#8226;
                  <span className='uppercase'>KHANH LINH</span>
                  &#8226;
                  <span>FEB 4, 2025</span>
                  &#8226;
                  <FaRegComment size={16} />0
                </div>
              </article>
            </div>
            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='bg-gray-50 p-2 rounded-md'>
                <h3 className='text-xl font-bold mb-4'>BÀI MỚI NHẤT</h3>
                <article className='border-b py-4'>
                  <span className='text-sm text-gray-700 font-semibold'>TIN LUẬT KHOA</span>
                  <h4 className='font-semibold my-2'>Luật Khoa và nguồn tài trợ từ chính phủ Hoa Kỳ</h4>
                  <div className='flex items-center gap-2 text-gray-600 text-sm'>
                    <FaRegUser size={16} />
                    &#8226;
                    <span className='uppercase'>KHANH LINH</span>
                    &#8226;
                    <span>FEB 4, 2025</span>
                    &#8226;
                    <FaRegComment size={16} />0
                  </div>
                </article>
                {/* Add more sidebar articles as needed */}
                <article className='border-b py-4'>
                  <span className='text-sm text-gray-700 font-semibold'>TIN LUẬT KHOA</span>
                  <h4 className='font-semibold my-2'>Luật Khoa và nguồn tài trợ từ chính phủ Hoa Kỳ</h4>
                  <div className='flex items-center gap-2 text-gray-600 text-sm'>
                    <FaRegUser size={16} />
                    &#8226;
                    <span className='uppercase'>KHANH LINH</span>
                    &#8226;
                    <span>FEB 4, 2025</span>
                    &#8226;
                    <FaRegComment size={16} />0
                  </div>
                </article>
                {/* Add more sidebar articles as needed */}
              </div>
            </div>
          </div>
          <LatestNews />
          <HomeLayoutA />
          <HomeLayoutB />
          <HomeLayoutC />
        </main>
      </div>
    </>
  )
}
