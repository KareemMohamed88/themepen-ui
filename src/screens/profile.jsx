import { toast } from 'react-hot-toast';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileWidget from './widgets/ProfileWidget';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  const id = JSON.parse(localStorage.getItem("user-data"))
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    description: "",
    picture: "",
    profilePicture: ""
  })
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const handleChange = (e) => {

    const { value, name } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }
  const getUserData = async () => {
    const res = await Axios.get(`https://v2-server.onrender.com/users/getuser/${id._id}`)
    if(!res.data){
      setError(true)
    }else{
      setData(res.data)
    }
  }
  const handleUpdateUser = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("firstName", userData.firstName);
    formData.append("lastName", userData.lastName);
    formData.append("description", userData.description);
    formData.append("picture", userData.picture);
    formData.append("profilePicture", userData.profilePicture);

    try {
      const fetch = await Axios.put(`https://v2-server.onrender.com/v2-server/user/update/${id._id}`, formData);
      localStorage.setItem("user-data", JSON.stringify(fetch.data))
      toast.success("user updated successfully")
    } catch (err) {
      console.log(err)
    }
  }
  const redirect = useNavigate()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!token) {
      redirect("/")
    }
    getUserData()
  })

  if (error) {
    return (
        <div className='h-screen md:h-400px flex items-center justify-center text-2xl text-slate-900 dark:text-white'>
          <p>user profile not found or has been blocked</p>
        </div>
    )
}

  return (
    <div className="px-2 md:px-0 flex items-center justify-center">
      <Helmet>
        <title>my profile</title>
        <meta name="description" content="theme pen my profile" />
      </Helmet>
      <div className="w-full md:w-1/2">
        <ProfileWidget
          profilePicture={data.profilePicture}
          picture={data.picture}
          firstName={data.firstName}
          description={data.description}
          track={data.track}
          date={data.date}
        />
        <form encType='multipart/form-data' onSubmit={handleUpdateUser}>
          <h2 className='my-6 text-xl text-slate-800 dark:text-white'>Update your data</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <h5 className='mb-2 dark:text-white'>First name</h5>
              <input onChange={handleChange} value={userData.firstName} className='border border-gray-200 w-full dark:bg-slate-700 rounded h-12 outline-none' type="text" name='firstName' />
            </div>
            <div>
              <h5 className='mb-2 dark:text-white'>Last name</h5>
              <input onChange={handleChange} value={userData.lastName} className='border border-gray-200 w-full dark:bg-slate-700 rounded h-12 outline-none' type="text" name='lastName' />
            </div>
            <div className='col-span-1 md:col-span-2'>
              <h5 className='mb-2 dark:text-white'>description</h5>
              <input maxLength={"80"} onChange={handleChange} value={userData.description} className='border w-full mb-4 border-gray-200 dark:bg-slate-700 rounded h-12 outline-none' type="text" name='description' />
            </div>
          </div>
          <div className='flex gap-x-4'>
            <input multiple id="UserImage" onChange={(e) => {
              setUserData({ ...userData, picture: e.target.files[0] })
            }}
              accept='.png, .jpg, jpeg' className='hidden' type="file" name='picture' />
            <label for="UserImage" className='w-50% cursor-pointer border border-blue-500 border-dashed rounded p-3 mb-4 outline-none flex items-center overflow-x-hidden'>{userData.picture ? userData.picture.name : <div className="block text-center items-center w-full font-bold text-slate-800">
              <i className="fa-regular fa-images text-blue-500"></i>
              <p className='text-blue-500'>Avatar</p>
            </div>}</label>
            <input multiple id="ProfileImage" onChange={(e) => {
              setUserData({ ...userData, profilePicture: e.target.files[0] })
            }} accept='.png, .jpg, jpeg' className='hidden' type="file" name='profilePicture' />
            <label for="ProfileImage" className='w-50% cursor-pointer border border-blue-500 border-dashed rounded p-3 mb-4 outline-none flex items-center overflow-x-hidden'>{userData.profilePicture ? userData.profilePicture.name : <div className="block text-center items-center w-full font-bold text-slate-800">
              <i className="fa-regular fa-images text-blue-500"></i>
              <p className='text-blue-500'>Profile bg Picture</p>
            </div>}</label>
          </div>
          <button id='submitUpdate' className='text-white font-bold w-1/2 bg-mainColor h-12 rounded'>Accept changes</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
