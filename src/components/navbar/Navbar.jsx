"use client"
import Link from "next/link"
import Links from "./links/Links"
import ThemeToggle from "../themeToggle"
import { useRouter } from "next/navigation"
import useAuth from '../../hooks/useAuth'

const Navbar = async () => {
  const route = useRouter()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className='bg-[#0C4B33] flex items-center justify-between pr-14 md:pr-20'>
      <div className=" flex justify-between md:justify-start flex-wrap min-h-[70px]  py-3 pl-10 lg:pl-16 gap-5 lg:gap-10">
        <div className='flex gap-6'>
          <Link href="/" className="text-4xl font-bold font-secondary py-1">django</Link>
          <div className='xl:grid text-xs font-bold text-[#15c682] h-12 py-1 leading-3 hidden '>
            <span>The web framework for</span>
            <span>perfectionists with deadlines.</span>
          </div>
        </div>
        <div>
          <Links />
        </div>
        <div className="flex items-center pr-1">
          <ThemeToggle />
        </div>
        <button
          onClick={() => {
            handleLogout()
          }}
          className="flex items-center">
          <div href={'login'} className="bg-black px-6 py-1 rounded-full border-2 font-bold ">Logout</div>
        </button>
      </div>

    </div>
  )
}

export default Navbar