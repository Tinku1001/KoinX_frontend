import React from 'react'
import { FiChevronsRight } from "react-icons/fi";

const BreadCrumb = ({ paths }) => {
    console.log(paths)
  return (
    <div className='mt-20 ml-16 sm:ml-5 md:ml-16 flex gap-2'>
      {paths.map((path, index) => {
        if(index == paths.length-1) {
            return <h3 className='font-bold md:text-lg sm:text-sm'>{path}</h3>
        } else {
            return <h3 className='md:text-lg sm:text-sm text-[#3E5765]'>{path} <FiChevronsRight className='inline' size={20} /></h3>
        }
      })}
    </div>
  )
}

export default BreadCrumb
