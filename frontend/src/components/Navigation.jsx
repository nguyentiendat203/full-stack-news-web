import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../context/Context'

export const Navigation = ({ listCate }) => {
  const { cateId, setCateId, setArrowLeft } = useContext(Context)

  return (
    <nav className='mt-[66px] border-y-2 border-gray-200'>
      <div className='container mx-auto px-4'>
        <ul className='flex justify-center space-x-6 overflow-x-auto font-medium text-gray-700 text-sm'>
          {listCate.length > 0 &&
            listCate.map((cate, index) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setCateId(cate.id)
                      setArrowLeft(true)
                    }}
                    key={index}
                    className={`hover:text-gray-500 cursor-pointer ${cateId === cate.id && 'border-b-2 border-black'}`}
                  >
                    <NavLink to={`/category/${cate.id}`} className='block pb-3 pt-4'>
                      {cate.name}
                    </NavLink>
                  </li>
                </>
              )
            })}
        </ul>
      </div>
    </nav>
  )
}
