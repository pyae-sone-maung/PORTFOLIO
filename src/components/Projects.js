import React from 'react'
import projectsInfo from '../utils/project-data'

const Projects = () => {
     return (
          <div className='py-2 mb-8 grid place-content-center' id='projects'>
               <div className='px-0 py-5 grid place-items-center'>
                    <p className='text-2xl text-white font-bold text-center uppercase'> Featured Projects </p>
                    <div className=" w-64 mt-2 border-b-4 border-dotted lg:hidden"> </div>
                    <div className='w-64  mt-2 h-0.5 skill-bg-color rounded-full hidden lg:block'> </div>
               </div>
               <div className='px-1 py-5 lg:-mt-3 gap-3 gap-x-7 text-white lg:px-14 grid lg:grid-cols-2'>
                    {
                         projectsInfo.map(project => (
                              <div key={project.id} className='px-4 py-5 w-96 rounded-md drop-shadow-md glassbg'>
                                   <h2 className='py-1 text-xl font-bold'> {project.title} </h2>
                                   <div className='py-1 grid grid-cols-4 gap-1 text-center text-white text-xs'>
                                        {project.tech_stack.map((tech, index) => (
                                             <span key={index} className='px-4 py-1 bg-gray-800 rounded-full'> {tech} </span>
                                        ))}
                                   </div>
                                   <p className='py-1 mt-2 text-sm text-justify'> {project.description}</p>
                                   <div className='py-0 flex gap-4 drop-shadow-md'>
                                        {project.links.map(pj => (
                                             <a key={pj.id} href={pj.link} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-bold px-5 py-2 mt-5 text-xs text-white bg-indigo-500 rounded-md'> {pj.name} </a>
                                        ))}
                                   </div>
                              </div>
                         ))
                    }
               </div>
          </div>
     )
}

export default Projects