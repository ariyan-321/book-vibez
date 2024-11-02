import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/addToDb';
import Book from '../book/Book';
import { getStoredWishList } from '../utility/addToWishList';


export default function ListedBooks() {
    const[readList,setReadList]=useState([])

    const[wishList,setWishList]=useState([])

    const allBooks=useLoaderData();

    useEffect(()=>{
        const storedReadList=getStoredReadList();
        const sotredReadListInt=storedReadList.map(id=> parseInt(id))
        const readBookList=allBooks.filter(book=> sotredReadListInt.includes(book.bookId))
        setReadList(readBookList)
    },[])

    useEffect(()=>{
        const storedWishList=getStoredWishList();
        const sotredWishListInt=storedWishList.map(id=> parseInt(id))
        const WishBookList=allBooks.filter(book=> sotredWishListInt.includes(book.bookId))
        setWishList(WishBookList)
    },[])


  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-8">Listed Books</h1>
        

        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab >Wisht List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='mt-12 text-4xl font-bold text-center'>Books I read: {readList.length}</h2>
      <div className='mt-12 grid grid-cols-1 justify-items-center  md:grid-cols-2 lg:grid-cols-3'>
        {
            readList.map(book=><Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <h2 className='mt-12 text-4xl font-bold text-center'>Books I read: {wishList.length}</h2>
      <div className='mt-12 grid grid-cols-1 justify-items-center  md:grid-cols-2 lg:grid-cols-3'>
        {
            wishList.map(book=><Book key={book.bookId} book={book}></Book>)
        }
        </div>
    </TabPanel>
  </Tabs>

    </div>
  )
}
