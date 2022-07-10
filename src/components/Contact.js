import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MdLocationCity } from 'react-icons/md'
import { FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Contact = () => {
     const MySwal = withReactContent(Swal);

     const form = useRef();
     const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_ghw4bhc', 'template_7kk80oo', form.current, 'NnCm_GDcJKGM_NKhO').then((result) => {
               MySwal.fire({
                    title: <h3> Thank You For Contact To Me </h3>,
                    html: <p> Have a nice day.</p>,
                    icon: 'success'
               })
          }, (error) => {
               console.log(error.text);
          }
          );
          e.target.reset();
     };

     return (
          <div className='px-2 py-2 grid place-content-center text-white' id='contact'>
               <div className='px-0 grid place-content-center'>
                    <p className='text-center text-2xl font-bold uppercase'> Contact </p>
                    <div className=" w-40 mt-2 border-b-4 border-dotted lg:hidden"> </div>
                    <div className=' w-32  mt-1 h-0.5 skill-bg-color rounded-full hidden lg:block'> </div>
               </div>
               <div className='container px-3 mt-5 lg:mt-0 lg:place-content-center w-screen lg:max-w-screen-xl grid lg:grid-cols-2'>
                    <form ref={form} onSubmit={sendEmail}>
                         <div className='px-0 py-1 lg:mt-9 gap-2 grid'>
                              <label className='text-base font-bold'> Name </label>
                              <input type="text" className='px-5 py-1 rounded-md text-black' placeholder='your name' name='name' required />

                              <label className='text-base font-bold' > Email </label>
                              <input type="email" name="email" id="" className='px-5 py-1 rounded-md text-black' placeholder='your email address' required />

                              <label className='text-base font-bold'> Message </label>
                              <textarea type="text" name='message' placeholder='Leave a message ...' className='px-5 py-1 rounded-md h-20 text-black' required />

                              <div className="lg:hover:hue-bg-color lg:w-auto h-12 rounded-lg grid place-items-center">
                                   <input type='submit' className=" px-40 lg:px-48 mx-1 py-2 bg-slate-700 hover:bg-black text-white cursor-pointer font-bold rounded-full lg:rounded-md" value="Send" />
                              </div>
                         </div>

                    </form>
                    <div className='px-0 py-5 lg:py-0'>
                         <div className='px-2 lg:px-20 lg:py-10 grid lg:place-content-center text-center text-base font-bold gap-y-3'>
                              <span className='flex gap-3'> <MdLocationCity className='w-7 h-7' /> <p className='mt-1'> Taungup City, Rakhine State.</p></span>
                              <span className='flex gap-3'> <FaEnvelope className='w-7 h-7' /> <p> pyaesonemaung.dec@gmail.com </p> </span>
                              <span className='flex gap-3'> <FaPhoneSquareAlt className='w-7 h-7' /> <p className='mt-1'> 09421768115 </p> </span>
                         </div>
                    </div>
               </div>
               <div className='px-0 py-1 mt-5 text-center border-t border-gray-500'>
                    <span className='text-sm'> Copyright &copy; 2022 </span>
               </div>
          </div>
     )
}

export default Contact