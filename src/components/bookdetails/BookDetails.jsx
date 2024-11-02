import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToStoredReadList } from '../utility/addToDb';
import { addToStoredWishList } from '../utility/addToWishList';

export default function BookDetails() {

    const {bookId}=useParams();

    const id=parseInt(bookId)

    const data=useLoaderData();

    const book=data.find(book=> book.bookId===id);
    const {
      bookName,
      author,
      image,
      review,
      totalPages,
      category,
      rating,
      tags,
      publisher,
      yearOfPublishing,
    } = book;



    const handleMarkAsRead=(id)=>{
      addToStoredReadList(id)
    }

    const handleWishList=(id)=>{
      addToStoredWishList(id)
    }
  

  return (
    <div>

      <div className='flex  flex-col justify-center items-center mt-7 lg:flex-row lg:grid grid-cols-2'>
      
      <div className="left  m-[40px] bg-gray-200 p-[80px] rounded-xl">

      <img className='rounded-xl w-full h-full object-cover' src={image} alt="" />
      </div>



    <div className="right  flex flex-col justify-start p-7 gap-5">

      <h1 className='font-bold text-4xl'>{bookName}</h1>
      <p className='text-xl font-bold'>By: {author}</p>
      <hr />
      <p className='text-xl font-bold'>{category}</p>
      <hr />
      <p className='text-xl '><strong>Review:</strong>
      {review}
      </p>
      <p className='flex gap-5 text-xl'><strong>Tag</strong> {
        tags.map(tag=> <span className='bg-green-300 text-green-600 rounded-xl px-3'>#{tag}</span>)
      }</p>
      <hr />
      <p className='text-xl font-bold '>Number of Pages: {totalPages}</p>
      <p className='text-xl font-bold '>Publisher: {publisher}</p>
      <p className='text-xl font-bold '>Year of Publishing: {yearOfPublishing}</p>
      <p className='text-xl font-bold '>Rating: {rating}</p>

      <div className='flex gap-4'>
        <button onClick={()=>handleMarkAsRead(bookId)} className="btn font-bold">Mark as Read</button>
      <button onClick={()=>handleWishList(id)} className="btn bg-sky-500"> add to Wishlist</button>
      </div>
    </div>




      </div>
       
    



    </div>
    
  )
}
