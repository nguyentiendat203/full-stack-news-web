import { FaRegComment, FaRegUser } from 'react-icons/fa'

export const VerticalCardPost = ({ post, imgHeight, apiUrl, titleSize }) => {
  return (
    <article className='mb-8'>
      <img src={`${apiUrl + post?.image}`} alt={post?.image} className={`w-full h-${imgHeight} object-cover rounded-md cursor-pointer hover:underline`} />
      <div className='my-2'>
        <span className='text-sm font-semibold text-gray-800 uppercase cursor-pointer hover:underline'>{post?.category?.name}</span>
      </div>
      <h2 className={`text-${titleSize} font-bold mb-4 line-clamp-2 lg:line-clamp-3 cursor-pointer hover:underline`}>{post?.title}</h2>
      <div className='flex items-center gap-2 text-gray-600 text-sm'>
        <FaRegUser size={16} />
        &#8226;
        <span className='uppercase cursor-pointer hover:underline'>
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
