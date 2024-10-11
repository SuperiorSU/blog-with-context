import React, { useContext } from 'react'
import { AppContext } from './Context/AppContext'

const Pagination = () => {
  const {page, pageChangeHandler,totalPages } = useContext(AppContext);
  return (
    <div>
      <div className='text-white flex justify-between'>
        { page>1 &&
          <button className='p-2 bg-yellow-300' onClick={()=>pageChangeHandler(page-1)}>Previous</button>
        }
        { page< totalPages && 
          <button className='p-2 bg-yellow-300' onClick={()=>pageChangeHandler(page+1)}> Next</button>
        }
        <p className=''>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination