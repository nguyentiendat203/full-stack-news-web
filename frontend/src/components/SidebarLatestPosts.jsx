import { FaRegComment, FaRegUser } from 'react-icons/fa'

export const SidebarLatestPosts = ({ listLatestPost, small }) => {
  return (
    <div className='lg:col-span-1'>
      <div className='bg-gray-50 p-2 rounded-md'>
        <h3 className='text-lg font-bold mb-2 text-center'>BÀI MỚI NHẤT</h3>
        {listLatestPost.length > 0 &&
          listLatestPost.map((post, index) => {
            return (
              <>
                <article key={index} className={index === listLatestPost.length - 1 ? 'py-2' : 'border-b py-2'}>
                  {!small && <span className='text-sm text-gray-700 uppercase font-semibold cursor-pointer hover:underline'>{post.category_name}</span>}
                  <h4 className='font-semibold my-1 line-clamp-2 cursor-pointer hover:underline'>{post.title}</h4>
                  <div className={`flex items-center ${!small ? 'justify-start' : 'justify-between'} gap-3 text-gray-600 text-sm`}>
                    <span className='flex items-center gap-1 uppercase cursor-pointer hover:underline '>
                      {!small && <FaRegUser size={14} />}
                      {post.author.full_name}
                    </span>

                    <span className='flex items-center gap-1 whitespace-nowrap'>
                      <span>&#8226;</span>
                      {new Date(post.created_at).toLocaleDateString('en-US', { year: `${small ? '2-digit' : 'numeric'}`, month: 'short', day: 'numeric' })}
                    </span>

                    <span className='flex items-center gap-1'>
                      &#8226;
                      <FaRegComment size={16} />0
                    </span>
                  </div>
                </article>
              </>
            )
          })}
      </div>
    </div>
  )
}
