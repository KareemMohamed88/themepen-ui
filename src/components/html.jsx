import React, { useState, useEffect } from 'react'
import Card from "./card"
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProjectsQuery } from "../projects/projectApi"
import { addToCart } from "../projects/wishListSlice";

const Html = () => {
  const [filterType, setFilterType] = useState("Html")
  const [currentType, setCurrenttype] = useState(filterType)
  const [categories, setCategories] = useState([
    { name: "Html" },
    { name: "react" },
    { name: "Mern" },
  ])
  const { data, error } = useGetAllProjectsQuery()
  const { items: projects, status } = useSelector((state) => state.projects)
  const handleAddToWishList = (project) => {
    dispatch(addToCart(project))
  }
  const dispatch = useDispatch()

  return (
    <div className='container mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-10 my-12'>
      <div className='col-span-1 md:col-span-2'>
        <h2 className='mb-6'>Template in {filterType}</h2>
        <ul className='flex md:block flex-wrap gap-5'>
          {categories.map((item) => (
            <li className='mb-2'>
              <button onClick={() => {
                setFilterType(item.name)
                setCurrenttype(item.name)
              }} className={`px-4 py-2 md:px-0 md:w-full text-mainColor border-2 border-mainColor text-xs font-bold rounded-full ${item.name === currentType? "bg-mainColor text-white" : null}`} value={item.name}>{item.name}</button>
            </li>
          ))}
        </ul>
      </div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 col-span-1 md:col-span-10'>
         {data?.filter(data => data.category === filterType ).map((data) => (
           <Card data={data} ID={data._id} title={data.title} price={data.price} picture={data.picture} sold={data.sold} date={data.date} handleAddToWishList={handleAddToWishList} />
         ))}
       </div>
    </div>
  )
}

export default Html