import React from 'react'
import ff from "../Image/ff.jpg"
import "./D1.css"

const D1 = () => {
    
  return (
    <div className='m-10 p-10 rounded-3xl bg-yellow-400 '>
    <div className='md:p-10 flex flex-col lg:flex-row'>
    {/* 1st flex */}
    <div className='lg:w-1/2'>
    <div className='font-normal text-3xl md:text-7xl'>
    Illustration
    <br />
     Design
    </div>
    <div className='border-b-2 border-black pt-10'>

    </div>
    <p className='text-5xl pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button className='mt-20 rounded-full font-bold flex px-5 py-3 border bottom-2 border-black bg-yellow-500 hover:bg-white'>
                <p>Get Started</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>

    </div>
    {/* 2nd dlex */}
    <div className='rounded-2xl lg:px-10 pt-10 lg:pt-0  lg:w-1/2'>
        <img className='rounded-lg w-full h-96' src={ff} alt="" />
    </div>

    </div>
      
    </div>
  )
}

export default D1
