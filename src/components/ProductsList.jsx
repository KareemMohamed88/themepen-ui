import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../projects/wishListSlice";
import Axios from "axios";
import BarLoader from "react-spinners/BarLoader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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
    <div className="pt-7">
      <div className="container mx-auto px-5">
        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Select an option
        </label>
        <input
          className="text-slate-800 dark:text-white bg-white dark:bg-slate-800/20 border-gray-300 text-sm rounded-lg block w-full p-2.5 md:w-30% outline-none"
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
              {data?.filter(data => {
                if (project === '') {
                  return data;
                } else if (data.title.toLowerCase().includes(project.toLowerCase())) {
                  return data;
                }
              }).map((data) => {
                return (
                  <div key={data._id} className="bg-white dark:bg-slate-800 shadow-cardShadow dark:shadow-darkCardShadow" data-aos="zoom-in">
                    <div className="overflow-hidden">
                      <div className="relative" onClick={() => {
                        token ? redirect(`/project-detalis/${data._id}`) : toast.error("you are is not a member please login")
                      }}>
                        <img
                          className="object-cover object-center w-full"
                          src={data.picture}
                          alt="faild"
                        />
                        <div className="absolute right-2 top-2 px-4 py-1 text-white bg-mainColor/90 rounded-sm text-xs">Sold: {data.sold}</div>
                      </div>
                    </div>
                    <div className="pt-5 pb-2.5 flex px-3 justify-between items-center text-black dark:text-slate-300">
                      <p
                        className="hover:underline"
                        onClick={() => {
                          token ? redirect(`/project-detalis/${data._id}`) : toast.error("you are is not a member please login")
                        }}
                      >
                        {data.title}
                      </p>
                      <small className="text-black dark:text-slate-300 text-base flex justify-center">
                        price:{" "}
                        <span className="ml-1">
                          {data.price <= 0 ? "free" : `${data.price}$`}
                        </span>
                      </small>
                    </div>
                    <div className="pt-6 pb-3 px-3 flex items-center justify-between">
                      <div>
                        <button aria-label={`redirectToDetalis-${data._id}`} id={`redirectToDetalis-${data._id}`} className="cursor-pointer mr-3 bg-mainColor px-5 text-sm h-10 text-white font-bold rounded" onClick={() => {
                          token ? redirect(`/project-detalis/${data._id}`) : toast.error("you are is not a member please login")
                        }}>Learn more</button>
                        <button aria-label={`addToWishList-${data._id}`} id={`addToWishList-${data._id}`} className="cursor-pointer bg-yellow-500 px-5 text-sm h-10 text-white font-bold rounded" onClick={() => {
                          handleAddToWishList(data)
                        }}><i class="fa-solid fa-bookmark"></i> </button>
                      </div>
                      <p className="font-bold text-sm text-slate-500 dark:text-slate-300">{data.date}</p>
                    </div>
                  </div>
                )
              })}
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
            className="py-1.5 px-6 bg-indigo-600 font-bold text-white cursor-pointer"
          >
            Show more
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductsList;
