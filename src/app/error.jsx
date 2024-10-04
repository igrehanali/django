"use client"

import Image from "next/image";
import errorgif from "../../public/error.gif";

const Error = () => {
  return (
    <>
    <div className='h-screen w-full grid justify-center items-center'>
      <div className='grid justify-center'>
        <div className='text-xl sm:text-4xl font-semibold'>Something went Wrong!</div>
        <Image className='flex justify-center ml-12 sm:ml-32' src={errorgif} height={150} width={150} alt='' />
      </div>
    </div>
  </>
  )
}

export default Error