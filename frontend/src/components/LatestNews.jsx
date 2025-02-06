import { FaRegComment, FaRegUser } from 'react-icons/fa'

export const LatestNews = ({ listLatestPost }) => {
  return (
    <>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-4'>BÀI MỚI NHẤT</h2>
        <hr />
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {listLatestPost.map((post, index) => (
            <article key={index} className='flex gap-4 h-[150px]'>
              <div className='w-2/5'>
                <img src={post.image} alt={post.title} className='w-full object-cover rounded-md h-full' />
              </div>
              <div className='flex-1 flex-grow'>
                <p className='text-sm text-gray-700 uppercase font-semibold'>{post.category?.name}</p>
                <h3 className='text-xl font-semibold hover:text-red-900 cursor-pointer my-2'>{post.title}</h3>
                <div className='flex items-center gap-2 text-gray-600 text-sm'>
                  <FaRegUser size={16} />
                  &#8226;
                  <span className='uppercase'>
                    {post.author?.user.first_name}&nbsp;{post.author?.user.last_name}
                  </span>
                  &#8226;
                  <span>{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  &#8226;
                  <FaRegComment size={16} />0
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className='text-center mt-8'>
          <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 font-medium'>ĐỌC THÊM</button>
        </div>
      </div>
    </>
  )
}
