import React from 'react'
import { toast } from 'react-hot-toast';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileWidget from './widgets/ProfileWidget';

const Registeration = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    description: "",
    track: "Only user",
    picture: "",
    profilePicture: ""
  })
  const [displayPicture, setDisplayPicture] = useState(null)
  const [displayProfilePicture, setDisplayProfilePicture] = useState(null)

  const handleChange = (e) => {
    const { value, name } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }
  const handleCreateUser = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("firstName", userData.firstName)
    formData.append("lastName", userData.lastName)
    formData.append("email", userData.email)
    formData.append("password", userData.password)
    formData.append("track", userData.track)
    formData.append("description", userData.description)
    formData.append("picture", userData.picture)
    formData.append("profilePicture", userData.profilePicture)


    await Axios.post('https://v2-server.onrender.com/v2-server/auth/register', formData).then((res) => {
      localStorage.setItem("user-data", JSON.stringify(res.data))
      toast.success("user created successfully")
      redirect("/login")
    }).catch((err) => {
      toast.error(err.response.data.message)
    })

  }
    const date = new Date().toDateString()

    const redirect = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
      if (token) {
        redirect("/")
      }
    })

    const trackOptions = [
      { name: "Front End Engineer" },
      { name: "Back End Engineer" },
      { name: "UI & UX" },
      { name: "Full Stack Developer" },
      { name: "Graphic Designer" },
      { name: "Only User" },
    ]

    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-100% md:w-80% p-4 rounded m-auto grid grid-cols-1 md:grid-cols-2 gap-6'>

          <ProfileWidget
            profilePicture={displayProfilePicture ? displayProfilePicture : "https://i.pinimg.com/564x/37/19/eb/3719ebdbfc5497a68688ec7604b6d440.jpg"}
            picture={displayPicture ? displayPicture : "https://i.pinimg.com/564x/cf/df/3c/cfdf3ca21215622a11ec97501f86df84.jpg"}
            firstName={userData.firstName ? userData.firstName : "First name"}
            description={userData.description ? userData.description : "description..."}
            track={userData.track ? userData.track : "Front end engineer"}
            date={date}
          />
          <div className='h-full'>
            <h2 className='text-slate-800 dark:text-white font-bold mb-3 text-2xl'>Welcome</h2>
            <p className='text-slate-800 dark:text-slate-300 mb-7'>Register and now create your profile page</p>
            <form encType='multipart/form-data' onSubmit={handleCreateUser} className='md:overflow-y-scroll md:h-96'>
              <div className='grid grid-cols-1 gap-5'>
                <div>
                  <h5 className='mb-2 dark:text-white'>First name</h5>
                  <input onChange={handleChange} value={userData.firstName} className='w-full  rounded h-12 outline-none' type="text" name='firstName' />
                </div>
                <div>
                  <h5 className='mb-2 dark:text-white'>Last name</h5>
                  <input onChange={handleChange} value={userData.lastName} className=' w-full  rounded h-12 outline-none' type="text" name='lastName' />
                </div>
                <div>
                  <h5 className='mb-2 dark:text-white'>Email</h5>
                  <input onChange={handleChange} value={userData.email} className='w-full  rounded h-12 outline-none' type="text" name='email' />
                </div>
                <div>
                  <h5 className='mb-2 dark:text-white'>Password</h5>
                  <input onChange={handleChange} value={userData.password} className='w-full  rounded h-12 outline-none' type="text" name='password' />
                </div>
                <div className='col-span-1 md:col-span-2'>
                  <h5 className='mb-2 dark:text-white'>description</h5>
                  <input maxLength={"80"} onChange={handleChange} value={userData.description} className='w-full mb-4 rounded h-12 outline-none' type="text" name='description' />
                </div>
                <div className='col-span-1 md:col-span-2'>
                  <h5 className='mb-2 dark:text-white'>Your track</h5>
                  <select onChange={handleChange} className='w-full mb-4rounded h-12 outline-none' type="text" name='track'>
                    {trackOptions.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <br />
              <div className='flex gap-x-4'>
                <input id="UserImage" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setDisplayPicture(URL.createObjectURL(e.target.files[0]));
                  }
                  setUserData({ ...userData, picture: e.target.files[0] })
                }
                } type="file" className='hidden' />
                <label for="UserImage" className='w-50% cursor-pointer border border-blue-500 border-dashed rounded p-3 mb-4 outline-none flex items-center overflow-x-hidden'>{userData.picture ? userData.picture.name : <div className="block text-center items-center w-full font-bold text-slate-800">
                  <i className="fa-regular fa-images text-blue-500"></i>
                  <p className='text-blue-500'>Avatar</p>
                </div>}</label>
                <input id='ProfileImage' onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setDisplayProfilePicture(URL.createObjectURL(e.target.files[0]));
                  }
                  setUserData({ ...userData, profilePicture: e.target.files[0] })
                }} type="file" className='hidden' />
                <label for="ProfileImage" className='w-50% cursor-pointer border border-blue-500 border-dashed rounded p-3 mb-4 outline-none flex items-center overflow-x-hidden'>{userData.profilePicture ? userData.profilePicture.name : <div className="block text-center items-center w-full font-bold text-slate-800">
                  <i className="fa-regular fa-images text-blue-500"></i>
                  <p className='text-blue-500'>Profile bg Picture</p>
                </div>}</label>


              </div>
              <button id='register' className='text-white font-bold w-1/2 bg-mainColor h-12 rounded'>signup</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  export default Registeration