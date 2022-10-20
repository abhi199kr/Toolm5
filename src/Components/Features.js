import React from 'react'
import f1 from "../Image/f1.jpg"
import f2 from "../Image/f2.jpg"
import f3 from "../Image/f3.jpg"
import "./Features.css"
const Features = () => {
  return (
    <div className='mx-auto w-10/12'>
      <h1 className='text-5xl py-5 '>Our Features</h1>
      <div className='bg-white rounded-2xl p-10'>
      {/* flex */}
      <div className='flex flex-col lg:flex-row gap-5'>
      {/* 1st flex */}
      <div className='bg-yellow-400 ro lg:w-1/3 rounded-2xl p-10'>
      <p className='text-center'>Professional Tools Kit</p>
      <h1 className='text-center font-bold text-3xl'>Illustration Design</h1>

        <img className='rounded-2xl h-80 my-10' src={f1}
         alt="fs" />

         <div className='flex'>
         <div className='grow'>
         <button className='rounded-full font-bold flex px-5 py-3 border bottom-2 border-black hover:bg-yellow-500 bg-white'>
                <p>Get Started</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>

         </div>
        
            <div className='font-bold text-4xl'>18$</div>

         </div>
      </div>


      <div className='bg-gray-300 ro lg:w-1/3 rounded-2xl p-10'>
      <p className='text-center'>Professional Tools Kit</p>
      <h1 className='text-center font-bold text-3xl'>Digital Art</h1>

        <img className='rounded-2xl h-80 my-10' src={f2}
         alt="fs" />

         <div className='flex'>
         <div className='grow'>
         <button className='rounded-full font-bold flex px-5 py-3 border bottom-2 border-black hover:bg-yellow-500 bg-white'>
                <p>Get Started</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>

         </div>
        
            <div className='font-bold text-4xl'>18$</div>

         </div>
      </div>

      <div className='bg-lime-400 ro lg:w-1/3 rounded-2xl p-10'>
      <p className='text-center'>Professional Tools Kit</p>
      <h1 className='text-center font-bold text-3xl'>Print Design</h1>

        <img className='rounded-2xl w-full h-80 my-10' src={f3}
         alt="fs" />

         <div className='flex'>
         <div className='grow'>
         <button className='rounded-full font-bold flex px-5 py-3 border bottom-2 border-black hover:bg-yellow-500 bg-white'>
                <p>Get Started</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>

         </div>
        
            <div className='font-bold text-4xl'>18$</div>

         </div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Features
