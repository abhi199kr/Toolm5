import React from 'react'
import Progress from './Progress'

const Skills = () => {
  return (
    <div className='p-10 flex flex-col lg:flex-row'>
      <div className='lg:w-1/2'>
      <h1 className='text-3xl font-bold'>Our Skills</h1>
      <p className='py-5 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis, faucibus at tincidunt vel, ultrices vitae mauris. Pellentesque ante. Praesent posuere dignissim nibh in finibus. Nunc rutrum nibh pellentesque, viverra dolor quis, sollicitudin libero.
      </p>

      </div>
      <div className='lg:w-1/2'>
      <h1 className=' text-2xl '>Illustration Design</h1>
      <Progress bgcolor="orange" progress='84'  height={25} />
      <h1 className=' text-2xl pt-10'>Print Design</h1>
      <Progress bgcolor="orange" progress='73'  height={25} />
      <h1 className=' text-2xl pt-10'>Digital Art</h1>
      <Progress bgcolor="orange" progress='51'  height={25} />
      


      </div>
    </div>
  )
}

export default Skills
