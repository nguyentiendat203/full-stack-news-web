import { useContext } from 'react'
import { FaRegComment, FaRegUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Context } from '../context/Context'

export const VerticalCardPost = ({ post, apiUrl, noCategory, size }) => {
  const { setCateId } = useContext(Context)

  return (
    <article className='mb-8'>
      <NavLink to={`/posts/${post?.slug}`}>
        <img
          src={apiUrl + post?.image}
          alt={post?.image?.url}
          className={`w-full imgHeight ${size === 'small' ? 'h-44' : '196'} object-cover object-top rounded-md cursor-pointer hover:underline`}
        />
      </NavLink>
      {!noCategory && (
        <NavLink to={`/category/${post?.category?.id}`} onClick={() => setCateId(post?.category?.id)}>
          <div className='mt-2'>
            <span className='text-sm font-semibold text-gray-800 uppercase cursor-pointer hover:underline'>{post?.category?.name}</span>
          </div>
        </NavLink>
      )}
      <NavLink to={`/posts/${post?.slug}`}>
        <h2 className={`${size === 'small' ? 'text-xl' : 'text-3xl'}  font-bold my-2  cursor-pointer hover:underline`}>{post?.title}</h2>
      </NavLink>
      <div className='flex items-center gap-2 text-gray-600 text-sm'>
        <FaRegUser size={16} />
        &#8226;
        <span className='uppercase cursor-pointer hover:underline line-clamp-1'>
          {post?.author?.user.first_name}&nbsp;{post?.author?.user.last_name}
        </span>
        &#8226;
        <span>{new Date(post?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        &#8226;
        <FaRegComment size={16} />0
      </div>
    </article>
  )
}
