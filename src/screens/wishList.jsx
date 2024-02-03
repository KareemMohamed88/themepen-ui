/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishList, getTotal } from '../projects/wishListSlice'
import Lottie from "lottie-react"
import animationData from "../animation/Animation - 1699222676043.json"
import animationData2 from "../animation/animation_lnqjraou.json"
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const WishList = () => {
  const wishList = useSelector((state) => state.wishList)
  const [state, handleSubmit] = useForm("myyqldpq");
  const dispatch = useDispatch()
  const [projectFrom, setProjectFrom] = useState([])
  useEffect(() => {
    const res = wishList.wishListItems.map((item) => item.title)
    JSON.stringify(res)
    setProjectFrom(res)
  }, [wishList.wishListItems])
  const [prompt, setPrompt] = useState(false);
  const handleDeleteFromwishList = (project) => {
    dispatch(deleteFromWishList(project))
  }
  const joinedString = projectFrom.join(',');
  localStorage.setItem("string", "string")
  localStorage.setItem("string2", joinedString)

  useEffect(() => {
    dispatch(getTotal())
  }, [dispatch])

  const handleOpenPrompt = () => {
    setPrompt(true)
  }
  const handleClosePrompt = () => {
    setPrompt(false)
  }

  if (state.succeeded) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-bold tracking-tight text-slate-800">you will get dawnload link after minutes</p>
          <Lottie loop={false} animationData={animationData2} style={{ height: 120 }}></Lottie>
          <div className=" flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-slate-800">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='h-screen'>
      <Helmet>
        <title>Wish list</title>
        <meta name="description" content="theme pen wish list" />
      </Helmet>
      <div className='h-28'></div>
      <div className='text-center'>
        <h1 className='text-3xl my-8 dark:text-white'>Wish list</h1>
      </div>
      <div className='w-full'>
        <div className='wishList-tabelw-full md:px-24 overflow-x-scroll md:overflow-x-auto'>
          {wishList.wishListItems.length === 0 ? (
            <div className='text-center h-80 flex items-center justify-center'>
              <div>
                <h1 className="text-2xl dark:text-white mb-4">no projects</h1>
                <Link
                  to="/"
                  className="rounded-md w-fit m-auto bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start shiping
                </Link>
              </div>
            </div>
          ) : (
            wishList.wishListItems && <table className="w-full mb-6 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs w-full border-b text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-7">
                    image
                  </th>
                  <th scope="col" className="p-7">
                    Name
                  </th>
                  <th scope="col" className="p-7">
                    Price
                  </th>
                  <th scope="col" className="p-7">
                    description
                  </th>
                  <th scope="col" className="p-7 text-center">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishList.wishListItems.map((project) => {
                  return (
                    <tr className="border-b dark:border-gray-700 w-full">
                      <th scope="row" className="px-6 py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img width={"80px"} src={project.picture} alt="" />
                      </th>
                      <td className="px-7">
                        {project.title}
                      </td>
                      <td className="px-7">
                        {project.price <= 0 ? "free" : `${project.price}$`}
                      </td>
                      <td className="px-7 relative">
                        <p className='truncate w-32 hover:text-indigo-500'>
                          {project.description}
                        </p>
                      </td>
                      <div className='flex gap-x-4 justify-center'>
                        <a href={`/project-detalis/${project._id}`} className='my-4 py-2.5 px-5 text-white font-bold rounded bg-blue-600'>
                          Visit
                        </a>
                        <button onClick={() => handleDeleteFromwishList(project)} className='my-4 py-2.5 px-5 text-white font-bold rounded bg-rose-600'>
                          Delete
                        </button>
                      </div>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}


        </div>
        {/* <div className='col-span-1 h-fit bg-white dark:bg-slate-800 shadow-md rounded-md '>
          <header className='border-b p-5 dark:border-slate-700'>
            <h1>Your wishList summary</h1>
          </header>
          <main className='w-full p-5'>
            <h5>
              {wishList.wishListTotalAmount <= 0 ? "All free" : `${wishList.wishListTotalAmount}$`}

            </h5>
            <button onClick={handleOpenPrompt} className="bg-indigo-600 hover:bg-indigo-700 mx-auto text-white font-medium w-100% md:w-70% h-12 rounded-3xl">Buy now</button>
          </main>
        </div> */}
      </div>
    </div>
  )
}

export default WishList