import React from 'react'
import "./D2.css"

const D2 = () => {
  return (
    <div className='p-5 md:p-10'>
    <div className='flex flex-col md:flex-row gap-5'>
    <div className=' md:w-1/2 bg-gray-300 rounded-lg p-10'>
    <h1 className='text-4xl'>Professional Illustration Design</h1>
    <div className='rounded-2xl py-5'>
        <img className='rounded-3xl' src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features2.jpg
        " alt="" />
    </div>
    <div className='border-b-2 border-black'>

    </div>
    <div className='flex flex-col lg:flex-row gap-2 text-center'>
    <div className=' flex grow gap-2'>
    <button className='mt-20 rounded-full font-bold flex px-5 py-3 border bottom-2 border-black hover:bg-yellow-500 bg-white'>
                <p>Design</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>
           

            <button className=' mt-20 rounded-full font-bold flex px-5 py-3 border bottom-2 border-black hover:bg-yellow-500 bg-white'>
                <p>PhotoShop</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>
            </div>
            <div>
            <button className='mt-20 rounded-full font-bold flex px-5 py-3 border bottom-2 border-black hover:bg-yellow-500 bg-white'>
                <p>Get Started</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>
            </div>

    </div>

    </div>

    <div className='md:w-1/2'>
    <div className='p-5 md:p-10 bg-lime-300 rounded-lg'>
    <h1 className='text-5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
    <button className='mt-20 rounded-full font-bold flex px-5 py-3 border bottom-2 border-black hover:bg-yellow-500 bg-white'>
                <p>Get Started</p>
                {/* <p className='bg-black w-2 h-2 rounded-full'>2</p> */}
            </button>
    </div>

    {/* 2nd below */}
    <div className=' mt-10 p-5 md:p-10 bg-white  rounded-lg'>
    <h1 className='text-5xl'>Nullam consectetur dolor vel ex ullamcorper, non viverra neque aliquet. Vivamus sed nulla rhoncus.
    </h1>
    
    </div>

    </div>

    </div>
      
    </div>
  )
}

export default D2
