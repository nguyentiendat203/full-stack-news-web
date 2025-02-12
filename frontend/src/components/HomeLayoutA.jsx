import { VerticalCardPost } from './VerticalCardPost'
import { HorizontalCardPost } from './HorizontalCardPost'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context/Context'

export const HomeLayoutA = ({ posts, apiUrl }) => {
  const { setCateId, setArrowLeft } = useContext(Context)

  const newPosts = [...posts]
  const firstPost = newPosts.shift()

  return (
    <div className='py-12'>
      <h2 className='text-2xl font-bold mb-4'>{firstPost.category?.name}</h2>
      <hr />
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <VerticalCardPost post={firstPost} size='large' noCategory apiUrl={apiUrl} />
        <div className='flex flex-col gap-6'>
          {newPosts.length > 0 &&
            newPosts.map((item, index) => {
              return (
                <>
                  <HorizontalCardPost key={index} post={item} noCategory apiUrl={apiUrl} />
                </>
              )
            })}
        </div>
      </div>
      <div className='text-center mt-8'>
        <NavLink
          to={`/category/${firstPost?.category?.id}`}
          onClick={() => {
            setCateId(firstPost?.category?.id)
            setArrowLeft(true)
          }}
        >
          <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-300 font-medium'>ĐỌC THÊM</button>
        </NavLink>
      </div>
    </div>
  )
}
