import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext'


function App() {
  const {authuser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/bggg.avif')" }}>
     
     <Routes>
      <Route path='/' element= {authuser ? <Home/> : <Navigate to= "/login" /> } />
      <Route path='/login' element= {authuser ? <Navigate to= "/" /> : <Login/>} />
      <Route path='/signup' element= {authuser ? <Navigate to= "/" /> : <SignUp/> } />
     </Routes>
     <Toaster />
    </div>
  )
}

export default App
