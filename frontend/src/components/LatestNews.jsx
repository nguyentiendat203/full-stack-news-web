import { FaRegComment, FaRegUser } from 'react-icons/fa'

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Luật Khoa và nguồn tài trợ từ chính phủ Hoa Kỳ',
    category: 'LUẬT KHOA TẠP CHÍ',
    date: 'FEB 4, 2025',
    comments: 0
  },
  {
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Luật Khoa ra mắt số báo tháng Một - 2025',
    category: 'LUẬT KHOA TẠP CHÍ',
    date: 'JAN 30, 2025',
    comments: 0
  },
  {
    image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Những ngã rẽ của chủ nghĩa xã hội - Kỳ 8: Con đường nào cho Việt Nam?',
    category: 'HOÀNG DẠ LAN',
    date: 'JAN 29, 2025',
    comments: 1
  },
  {
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Đọc Đường hy vọng: Khi đã qua, đừng hận thù',
    category: 'THỤC KHANG',
    date: 'JAN 28, 2025',
    comments: 1
  },
  {
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Thư cuối tuần: Bài mới và cảm nang mới về lập pháp',
    category: 'LUẬT KHOA TẠP CHÍ',
    date: 'JAN 25, 2025',
    comments: 0
  }
]

export const LatestNews = () => {
  return (
    <>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-4'>BÀI MỚI NHẤT</h2>
        <hr />
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {articles.map((article, index) => (
            <article key={index} className='flex gap-4 h-[150px]'>
              <div className='w-2/5'>
                <img src={article.image} alt={article.title} className='w-full object-cover rounded-md h-full' />
              </div>
              <div className='flex-1 flex-grow'>
                <h3 className='text-xl font-semibold mb-2 hover:text-red-900 cursor-pointer'>{article.title}</h3>
                <div className='flex items-center gap-2 text-gray-600 text-sm'>
                  <FaRegUser size={16} />
                  &#8226;
                  <span className='uppercase'>KHANH LINH</span>
                  &#8226;
                  <span>{article.date}</span>
                  &#8226;
                  <FaRegComment size={16} />
                  {article.comments}
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
