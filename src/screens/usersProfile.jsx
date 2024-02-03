/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import ProfileWidget from "./widgets/ProfileWidget"
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UsersProfile = () => {
    const params = useParams()
    const [profile, setProfile] = useState({})
    const [error, setError] = useState(false)
    const getProfileData = async () => {
        const res = await Axios(`https://v2-server.onrender.com/users/getUser/${params.id}`)
        if (!res.data) {
            setError(true)
        } else {
            setProfile(res.data)
        }
    }
    useEffect(() => {
        getProfileData()
    })


    if (error) {
        return (
            <div className='h-400px flex items-center justify-center text-2xl text-white'>
                <p>user profile not found or has been blocked</p>
            </div>
        )
    }

    const redirect = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            redirect("/")
        }
    })


    return (
        <div className='h-screen px-2 md:px-0 w-full md:w-1/2 m-auto'>
            <ProfileWidget
                profilePicture={profile.profilePicture?.startsWith("https") ? profile.profilePicture : `https://v2-server.onrender.com/image/${profile.profilePicture}`}
                picture={profile.picture?.startsWith("https") ? profile.picture : `https://v2-server.onrender.com/image/${profile.picture}`}
                firstName={profile.firstName}
                description={profile.description}
                date={profile.date}
            />
        </div>
    )
}

export default UsersProfile
