import React from 'react'
import { FaRegComment, FaRegUser } from 'react-icons/fa'

export const HomeLayoutC = () => {
  return (
    <div className='py-12'>
      <h2 className='text-2xl font-bold mb-4'>THỂ CHẾ</h2>
      <hr />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <article className='flex gap-4 h-[150px]'>
          <div className='w-2/5'>
            <img
              src='https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt='Malaysia ASEAN'
              className='w-full object-cover rounded-md h-full'
            />
          </div>
          <div className='flex-1 flex-grow'>
            <h3 className='text-xl font-semibold mb-2 hover:text-red-900 cursor-pointer'>sladls edhksandkjs kshdkhwjd</h3>
            <div className='flex items-center gap-2 text-gray-600 text-sm'>
              <FaRegUser size={16} />
              &#8226;
              <span className='uppercase'>KHANH LINH</span>
              &#8226;
              <span>FEB 04</span>
              &#8226;
              <FaRegComment size={16} />0
            </div>
          </div>
        </article>
        <article className='flex gap-4 h-[150px]'>
          <div className='w-2/5'>
            <img
              src='https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt='Malaysia ASEAN'
              className='w-full object-cover rounded-md h-full'
            />
          </div>
          <div className='flex-1 flex-grow'>
            <h3 className='text-xl font-semibold mb-2 hover:text-red-900 cursor-pointer'>sladls edhksandkjs kshdkhwjd</h3>
            <div className='flex items-center gap-2 text-gray-600 text-sm'>
              <FaRegUser size={16} />
              &#8226;
              <span className='uppercase'>KHANH LINH</span>
              &#8226;
              <span>FEB 04</span>
              &#8226;
              <FaRegComment size={16} />0
            </div>
          </div>
        </article>
        <article className='flex gap-4 h-[150px]'>
          <div className='w-2/5'>
            <img
              src='https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt='Malaysia ASEAN'
              className='w-full object-cover rounded-md h-full'
            />
          </div>
          <div className='flex-1 flex-grow'>
            <h3 className='text-xl font-semibold mb-2 hover:text-red-900 cursor-pointer'>sladls edhksandkjs kshdkhwjd</h3>
            <div className='flex items-center gap-2 text-gray-600 text-sm'>
              <FaRegUser size={16} />
              &#8226;
              <span className='uppercase'>KHANH LINH</span>
              &#8226;
              <span>FEB 04</span>
              &#8226;
              <FaRegComment size={16} />0
            </div>
          </div>
        </article>
      </div>
      <div className='text-center mt-8'>
        <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 font-medium'>ĐỌC THÊM</button>
      </div>
    </div>
  )
}
