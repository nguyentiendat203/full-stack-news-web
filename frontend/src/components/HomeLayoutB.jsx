import { VerticalCardPost } from './VerticalCardPost'

export const HomeLayoutB = ({ posts, apiUrl }) => {
  return (
    <div className='py-12'>
      <h2 className='text-2xl font-bold mb-4'>{posts[0].category?.name}</h2>
      <hr />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {posts.length > 0 &&
          posts.map((item, index) => {
            return (
              <>
                <VerticalCardPost key={index} post={item} apiUrl={apiUrl} size='small' />
              </>
            )
          })}
      </div>
      <div className='text-center mt-8'>
        <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 font-medium'>ĐỌC THÊM</button>
      </div>
    </div>
  )
}
