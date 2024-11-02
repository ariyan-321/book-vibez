import { ToastContainer, toast ,Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const getStoredWishList=()=>{
    const storedListStr=localStorage.getItem("wish-list");
    if(storedListStr){
        const storedList=JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return []
    }
}

const addToStoredWishList=(id)=>{
    const storedList=getStoredWishList()
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
        localStorage.setItem('wish-list',storedListStr);

        toast.success('added to wishlist!', {
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


export {addToStoredWishList,getStoredWishList}
