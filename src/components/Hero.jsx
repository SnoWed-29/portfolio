import React from 'react'
import Typed from 'react-typed';


const Hero = ({setActiveComponent}) => {
    return (
        <div className='text-white'>
            <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] text-2xl font-bold p-2'> WEB DEVELOPER</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold '>Full Stack Development</h1>
                <div className='flex justify-center items-center '>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Build You A Web App With </p>
                    <Typed
                     className='md:text-4xl text-[#00df9898] sm:text-3xl text-xl md:pl-4 font-bold pl-2'
                     strings={['LARAVEL', 'EXPRESS JS', 'REACT JS']}
                     typeSpeed={140} 
                     backSpeed={160} 
                     loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'> More than 1 Year of Experience</p>
                <button onClick={() => {
            setActiveComponent("about");
          }} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>More Info...</button>
            </div>
        </div>
    )
}


export default Hero