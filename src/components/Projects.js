import React from 'react'

const Projects = () => {
  return (
     <div className='py-5 grid place-content-center'>
          <div className='px-0 py-5'>
               <p className='text-2xl font-bold text-center'> Featured Projects </p>
          </div>

          <div className='px-0 container w-96'>
               <div className='px-5 py-5 rounded-md bg-gray-300'>
                    <h2 className='py-2 text-2xl font-bold'> Title </h2>
                    <div className='py-2 flex gap-3 text-white text-xs'>
                         <span className='px-4 py-1 bg-gray-800 rounded-full'> NodeJs </span>
                         <span className='px-4 py-1 bg-gray-800 rounded-full'> Tailwind </span>
                         <span className='px-4 py-1 bg-gray-800 rounded-full'> PassportJs </span>
                    </div>
                    <p className='py-1 mt-5 text-xl'> Description = kgirikr kifirk kifirkkf fifkrkfk ifkfkf fifkfkf ifkfk </p>
                    <div className='py-2 flex gap-5'>
                         <a href='www.google.com' className='px-5 py-2 text-white bg-blue-500 rounded-md'> View Source </a>
                         <a href="www.google.com" className='px-5 py-2 text-white bg-blue-500 rounded-md'> Demo </a>
                    </div>
               </div>
          </div>
     </div>
  )
}

export default Projects