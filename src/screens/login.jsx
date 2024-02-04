import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Axios from "axios"
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })
  const {
    email,
    password
  } = userData
  const handleChange = (e) => {
    const { value, name } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }
  const redirect = useNavigate()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (token) {
      redirect("/")
    }
  }, [redirect, token])

  const handleLoginUser = async (e) => {
    e.preventDefault()
    await Axios.post("https://v2-server.onrender.com/auth/login", { ...userData }).then((res) => {
      setUserData({
        ...userData,
        email: "",
        password: ""
      })
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user-id", JSON.stringify(res.data._id))
      window.location.reload()
    }).catch((err) => {
      toast.error(err.response.data.message)
      console.log(err)
    })
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-90% md:w-60% lg:w-40% p-4 rounded m-auto'>
        <h2 className='text-slate-800 dark:text-white font-bold mb-3 text-2xl'>Welcome</h2>
        <p className='text-slate-800 dark:text-slate-300 mb-7'>login or signup to be a member in themepen</p>
        <form onSubmit={handleLoginUser} className='flex flex-col'>
          <input onChange={handleChange} className='rounded pl-5 h-12 mb-4 outline-none' type="email" name='email' placeholder='Email' />
          <input onChange={handleChange} className='rounded pl-5 h-12 mb-4 outline-none' type="password" name='password' placeholder='Password' />
          <div className='flex items-center justify-between flex-col md:flex-row gap-3'>
            <button id='login' className='text-white font-bold w-full md:w-1/2 bg-mainColor h-12 rounded'>Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login