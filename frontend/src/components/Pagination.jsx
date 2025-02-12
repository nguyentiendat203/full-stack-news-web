import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const Pagination = ({ totalPages, page, setPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className='text-center my-12'>
      <nav aria-label='Pagination' className='isolate inline-flex -space-x-px rounded-md shadow-xs'>
        <span
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          className={`${
            page === 1 && 'cursor-not-allowed'
          } cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          <span className='sr-only'>Previous</span>
          <FaArrowLeft aria-hidden='true' className='size-5' />
        </span>
        {pageNumbers.map((number) => (
          <>
            <span
              onClick={() => setPage(number)}
              aria-current='page'
              className={`${
                page === number && 'bg-gray-800 text-white'
              } cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset ${
                page !== number && 'hover:bg-gray-300'
              } focus:z-20 focus:outline-offset-0 `}
            >
              {number}
            </span>
          </>
        ))}
        <span
          onClick={() => setPage(page < totalPages ? page + 1 : page)}
          className={`${
            page === totalPages && 'cursor-not-allowed'
          } cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          <FaArrowRight aria-hidden='true' className='size-5' />
        </span>
      </nav>
    </div>
  )
}
