import React from 'react'

const Footer = () => {

const send = () => {
     console.log("Hello Send ")
}

  return (
     <div className='px-2 py-2 grid place-content-center bg-gray-300'>
          <div className='px-0'>
               <p className='text-center text-2xl font-bold uppercase'> Contact </p>
          </div>
          <div className='container px-3 lg:place-content-center w-screen lg:max-w-screen-xl grid lg:grid-cols-2'>
               <div className='px-0 py-1 gap-2 grid'>
                    <label htmlFor="email" className='text-base font-bold' > Email </label>
                    <input type="text" name="" id="" className='px-5 py-1 rounded-md' placeholder='your email address' />
                    <label htmlFor="message" className='text-base font-bold'> Message </label>
                    <textarea type="text" className='px-1 py-1 rounded-md h-20' />
                    <button className='mt-5 px-1 py-2 bg-slate-700 text-white rounded-lg' onClick={send}> Send </button>
               </div>

               <div className='px-0 py-5 lg:py-0'>
                    <div className='px-2 lg:px-20 lg:py-10'>
                         <p> Location </p>
                         <p> Email </p>
                         <p> Phone </p>
                    </div>
               </div>
          </div>
          <div className='px-0 py-1 mt-5 text-center border-t border-gray-500'>
                <span> Copyright &copy; 2022 </span>
           </div>
     </div>
  )
}

export default Footer