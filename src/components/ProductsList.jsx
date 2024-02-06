import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../projects/wishListSlice";
import Axios from "axios";
import BarLoader from "react-spinners/BarLoader";
import Card from "./card"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import { useGetAllProjectsQuery } from "../projects/projectApi"
const ProductsList = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [project, setProject] = useState("")
  const [productsPerPage, setProductsPerPage] = useState(6);
  const { data, error } = useGetAllProjectsQuery()
  const redirect = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const { items: projects, status } = useSelector((state) => state.projects)

  const handleMoreProductsPerPage = () => {
    setProductsPerPage((productsPerPage) => productsPerPage + 6);
  };

  const handleAddToWishList = (project) => {
    dispatch(addToCart(project))
  }

  if (data?.length === 0) {
    return (
      <p className="w-full text-white flex justify-center pb-8 text-xl">no projects yet !</p>
    )
  }

  return (
    <div className="pt-7 bg-speceficSection dark:bg-indigo-900/20">
      <div className="container mx-auto px-5">
        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Select an option
        </label>
        <input
          className="text-slate-800 dark:text-white bg-white dark:bg-slate-800 border-gray-300 text-sm rounded-lg block w-full p-2.5 md:w-30% outline-none"
          name="category-list"
          id="category-list"
          type="search"
          onChange={(e) => setProject(e.target.value)}
          aria-label="Search"
          placeholder="Search"
        />
      </div>

      <div id="learnmore">
        <div className="container projects-container py-12 mx-auto px-5">
          {status === "success" ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data?.slice(0, productsPerPage).filter(data => {
                if (project === '') {
                  return data;
                } else if (data.title.toLowerCase().includes(project.toLowerCase())) {
                  return data;
                }
              }).map((data) => (
                <Card data={data} ID={data._id} title={data.title} price={data.price} picture={data.picture} sold={data.sold} date={data.date} handleAddToWishList={handleAddToWishList} />
              ))}
            </div> : status === "pending" ? (
              <div className="w-full py-6 flex justify-center items-center">
                <BarLoader color="#4e67eb" />
              </div>
            ) : (
              <p>error</p>
            )
          }

        </div>
      </div>
      {data?.length > 6 ? (
        <div className="flex justify-center pb-12">
          <button
            id="showMore"
            onClick={handleMoreProductsPerPage}
            className="py-1.5 px-6 bg-mainColor font-bold text-white cursor-pointer"
          >
            Show more
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductsList;
