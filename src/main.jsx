import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Error from './components/error/Error.jsx';
import Home from './components/home/Home.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import BookDetails from './components/bookdetails/BookDetails.jsx';
import ListedBooks from './components/listedBooks/ListedBooks.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      },
      
      {
        path:'books/:bookId',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch("./data/booksData.json")
      },
      { 
        path:"listedBooks",
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch("/data/booksData.json")
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)