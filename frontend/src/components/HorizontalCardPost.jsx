import { FaRegComment, FaRegUser } from 'react-icons/fa'

export const HorizontalCardPost = ({ post }) => {
  return (
    <article className='flex gap-4 h-[150px]'>
      <div className='w-2/5'>
        <img src={post.image} alt={post.title} className='w-full object-cover rounded-md h-full' />
      </div>
      <div className='flex-1 flex-grow'>
        <p className='text-sm text-gray-700 uppercase font-semibold hover:underline cursor-pointer'>{post.category?.name}</p>
        <h3 className='text-xl font-semibold hover:underline cursor-pointer my-2'>{post.title}</h3>
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
