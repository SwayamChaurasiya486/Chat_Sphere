import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import API from '../api/api';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthuser} = useAuthContext();

  const logout = async () =>{
    setLoading(true);

    try {
        const res = await fetch(`${API}/api/auth/logout`,{
            method:  "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
        });
        const data = await res.json();
        if(data.error){
                throw new Error(data.error)
            }

        localStorage.removeItem("chat-user");

        setAuthuser(null);

    } catch (error) {
        toast.error(error.message);

    }finally{
        setLoading(false);
    }
    
  }
  return {loading, logout};
}

export default useLogout
