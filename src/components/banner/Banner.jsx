import React from 'react'

export default function Banner() {
  return (
    <div>
        <div className='bg-gray-300 flex gap-7 p-7 flex-col md:flex-row justify-around  items-center py-7 mt-12 rounded-lg w-[90%] h-auto mx-auto'>
        <div className="texts space-y-7 ">
            <h1 className='font-bold text-5xl'>Books to freshen up <br /> your bookshelf</h1>
            <button className="btn bg-green-400 border-none">View The List</button>
        </div>

        <div className="image">
            <img className='rounded-xl' src="./books.jpg" alt="" />
        </div>

        </div>
    </div>
  )
}
