import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

<div class="nav mt-3">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <a class="cursor-pointer space-x-2 text-2xl md:text-3xl font-bold flex items-center">
            <img className='w-[30px]' src="/book.ico" alt="" />
          Book Vibez
        </a>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 space-x-2">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/listedBooks"}>ListedBooks</NavLink></li>          

          <li><a>Portfolio</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      <div class="navbar-end ">
        <div class="icons  flex gap-4 lg:gap-1 xl:gap-4 mr-3 hidden md:flex">
          <i class="fa-solid fa-magnifying-glass shadow-xl p-2 md:p-3 rounded-full cursor-pointer "></i>
          <i class="fa-solid fa-cart-shopping shadow-xl p-2 md:p-3 rounded-full cursor-pointer "></i>
        </div>
       <div className='flex gap-5 items-center'>
       <button className="btn bg-green-400">Sign In</button>
       <button className="btn bg-sky-400">Sign Up</button>
       </div>
      </div>

      <div class="dropdown lg:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <i class="fa-solid fa-bars p-3 shadow-xl rounded-full cursor-pointer "></i>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52px p-2 shadow ml-[-30px]">
          <NavLink to={"/"}>Home</NavLink>
          <li><NavLink to={"/listedBooks"}>ListedBooks</NavLink></li>
          <li><a>Portfolio</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
    </div>
  )
}
