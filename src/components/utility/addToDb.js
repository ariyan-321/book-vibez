import { json } from "react-router-dom";
import { ToastContainer, toast,Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const getStoredReadList=()=>{
    const storedListStr=localStorage.getItem("read-list");
    if(storedListStr){
        const storedList=JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return []
    }
}

const addToStoredReadList=(id)=>{
    const storedList=getStoredReadList()
    if(storedList.includes(id)){
        toast.error('already exist!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);

        toast.success('added to read', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}


export {addToStoredReadList,getStoredReadList}
