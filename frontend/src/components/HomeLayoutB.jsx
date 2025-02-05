import React from 'react'
import { FaRegComment, FaRegUser } from 'react-icons/fa'

export const HomeLayoutB = () => {
  return (
    <div className='py-12'>
      <h2 className='text-2xl font-bold mb-4'>QUAN ĐIỂM</h2>
      <hr />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
      <div className='text-center mt-8'>
        <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 font-medium'>ĐỌC THÊM</button>
      </div>
    </div>
  )
}
