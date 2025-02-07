import { HorizontalCardPost } from './HorizontalCardPost'

export const LatestNews = ({ listLatestPost }) => {
  return (
    <>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-4'>BÀI MỚI NHẤT</h2>
        <hr />
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {listLatestPost.map((post, index) => (
            <HorizontalCardPost key={index} post={post} />
          ))}
        </div>

        <div className='text-center mt-8'>
          <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 font-medium'>ĐỌC THÊM</button>
        </div>
      </div>
    </>
  )
}
