export const Navigation = ({ listCate }) => {
  return (
    <nav className='mt-[66px] border-y-2 border-gray-200'>
      <div className='container mx-auto px-4'>
        <ul className='flex justify-center space-x-6 overflow-x-auto py-4 font-medium text-gray-700 text-sm'>
          {listCate.length > 0 &&
            listCate.map((cate, index) => {
              return (
                <>
                  <li key={index}>
                    <a href='#' className='hover:text-gray-500'>
                      {cate.name}
                    </a>
                  </li>
                </>
              )
            })}
        </ul>
      </div>
    </nav>
  )
}
