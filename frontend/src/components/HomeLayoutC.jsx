import { NavLink } from 'react-router-dom'
import { HorizontalCardPost } from './HorizontalCardPost'

export const HomeLayoutC = ({ posts, apiUrl }) => {
  return (
    <div className='py-12'>
      <h2 className='text-2xl font-bold mb-4'>{posts[0].category?.name}</h2>
      <hr />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {posts.length > 0 &&
          posts.map((item, index) => {
            return (
              <>
                <HorizontalCardPost key={index} post={item} apiUrl={apiUrl} noCategory />
              </>
            )
          })}
      </div>
      <div className='text-center mt-8'>
        <NavLink to={`/category/${posts[0]?.category?.id}`}>
          <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-300 font-medium'>ĐỌC THÊM</button>
        </NavLink>
      </div>
    </div>
  )
}
