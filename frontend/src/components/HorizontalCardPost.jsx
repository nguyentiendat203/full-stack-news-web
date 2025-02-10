import { useContext } from 'react'
import { FaRegComment, FaRegUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Context } from '../context/Context'

export const HorizontalCardPost = ({ post, apiUrl, noCategory }) => {
  const { setCateId } = useContext(Context)

  return (
    <article className='flex gap-4 h-[150px]'>
      <div className='w-2/5'>
        <NavLink to={`/posts/${post?.slug}`}>
          <img src={String(post?.image).includes('http') ? post?.image : apiUrl + post?.image} alt={post.title} className='w-full object-cover rounded-md h-full object-top' />
        </NavLink>
      </div>
      <div className='flex-1 flex-grow'>
        {!noCategory && (
          <NavLink to={`/category/${post?.category?.id}`} onClick={() => setCateId(post?.category?.id)}>
            <p className='text-sm text-gray-700 uppercase mb-2 font-semibold hover:underline cursor-pointer'>{post.category?.name}</p>
          </NavLink>
        )}
        <NavLink to={`/posts/${post?.slug}`}>
          <h3 className='text-xl font-semibold hover:underline cursor-pointer mb-2'>{post.title}</h3>
        </NavLink>
        <div className='flex items-center gap-2 text-gray-600 text-sm'>
          <FaRegUser size={16} />
          &#8226;
          <span className='uppercase hover:underline cursor-pointer'>
            {post.author?.user.first_name}&nbsp;{post.author?.user.last_name}
          </span>
          &#8226;
          <span>{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          &#8226;
          <FaRegComment size={16} />0
        </div>
      </div>
    </article>
  )
}
