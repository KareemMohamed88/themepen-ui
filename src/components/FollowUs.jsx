import React from 'react'
import { NavLink } from 'react-router-dom'

const FollowUs = () => {
    return (
        <div className='relative rounded-xl w-90% md:w-70% h-36 md:h-28 bg-mainColor shadow-mainColor shadow-md container m-auto -mb-14 z-50'>
            <div className="px-5 mx-auto flex items-start md:items-center justify-center md:justify-between gap-4 flex-col md:flex-row h-full">
                <h1 className='text-2xl text-white font-sans'>Also you can follow us on</h1>
                <ul className="flex gap-7">
                    <li><NavLink className="h-10 w-10 flex items-center justify-center bg-white text-mainColor rounded-full text-sm cursor-pointer" to="https://www.facebook.com/themepen/"><i class="fa-brands fa-facebook-f"></i></NavLink></li>
                    <li><NavLink className="h-10 w-10 flex items-center justify-center bg-white text-mainColor rounded-full text-sm cursor-pointer" to="https://www.instagram.com/themepen/"><i class="fa-brands fa-instagram"></i></NavLink></li>
                    <li><NavLink className="h-10 w-10 flex items-center justify-center bg-white text-mainColor rounded-full text-sm cursor-pointer" to="https://pin.it/3HNghSj5U"><i class="fa-brands fa-pinterest-p"></i></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default FollowUs