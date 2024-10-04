'use client'
import React, { useEffect, useState } from 'react'
import moon from '../../public/moon.png'
import sun from '../../public/sun.png'
import Image from 'next/image'

const ThemeToggle = () => {
  const[darkMode, setDarkMode] = useState(true)

  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if(theme =='dark'){
      setDarkMode(true)
    }
  },[])

  useEffect(()=>{
   if(darkMode){
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
   }else{
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
   }
  },[darkMode])

  return (
    <button onClick={()=>setDarkMode(!darkMode)}>
      {
        darkMode ?
        <Image className='h-4 w-4' src={moon} alt=''/>
        :
        <Image className='h-4 w-4' src={sun} alt=''/>
      }
        
    </button>
  )
}

export default ThemeToggle