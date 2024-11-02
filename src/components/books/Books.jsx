import React, { useEffect, useState } from 'react'
import Book from '../book/Book';

export default function Books() {

    const [books,setBooks]=useState([]);


    useEffect(()=>{
        fetch("/data/booksData.json")
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])

  return (
    <div>
        <h1 className='text-center text-4xl font-bold mt-12'>Books</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 justify-items-center mt-12 w-[90%] mx-auto'>
            {
                books.map((book,i)=><Book key={i} book={book}></Book>)
            }
        </div>
    </div>
  )
}
