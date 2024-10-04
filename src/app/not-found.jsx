'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import pagenotfound from '../../public/pagenotfound.gif'


const NotFound = () => {

  const router = useRouter()

  const handleRoute =()=>{
    router.replace('/')
  }

  return (
    <>
      <div className='h-screen w-full grid justify-center items-center bg-white dark:bg-black dark:text-gray-300 text-[#0C4B33]'>
        <div className='grid justify-center'>
          <Image className='ml-4' src={pagenotfound} height={150} width={150} alt='' />
          <button className='bg-[#115740] px-10 py-3 rounded font-medium text-white' onClick={handleRoute}>Back to home</button>
        </div>
      </div>
    </>
  )
}

export default NotFound