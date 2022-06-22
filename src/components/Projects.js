import React from 'react'
import projectsInfo from '../utils/data'

const Projects = () => {
  return (
     <div className='py-5 grid place-content-center bg-purple-400'>
          <div className='px-0 py-5'>
               <p className='text-2xl font-bold text-center uppercase'> Featured Projects </p>
          </div>

          <div className='px-1 py-5 gap-3 gap-x-10 lg:px-14 grid lg:grid-cols-2'>
               {
                    projectsInfo.map(project => (
                              <div className='px-5 py-5 rounded-md drop-shadow-md bg-gray-300 hover:bg-blue-500'>
                                   <h2 className='py-1 text-xl font-bold'> {project.title} </h2>
                                   <div className='py-1 flex gap-1 text-white text-xs'>
                                        {project.tech_stack.map(tech => (
                                             <span className='px-4 py-1 bg-gray-800 rounded-full'> {tech} </span>
                                        ) )}
                                   </div>
                                   <p className='py-1 mt-2 text-base'> {project.description}</p>
                                   <div className='py-1 flex gap-4 drop-shadow-md'>
                                        <a href={project.link1} className='px-5 py-2 text-xs text-white bg-blue-500 rounded-md'> View Source </a>
                                        <a href={project.link2} className='px-5 py-2 text-xs text-white bg-blue-500 rounded-md'> Demo </a>
                                   </div>
                              </div>
                    ))
               }
          </div>
     </div>
  )
}

export default Projects