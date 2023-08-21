import React from 'react'

const Footer = () => {
  return (
    <div className='float-bottom bottom-0 w-full pb-24 sm:pb-0'>
        <div className='flex items-center justify-center flex-col'>
            <h2 className='text-gray-500'>Created By <span className='text-sky-500'>Nishan Neupane</span></h2>
            <span className='text-gray-500 text-sm'>&copy; {new Date().getFullYear()} All right reserved</span>
        </div>
    </div>
  )
}

export default Footer