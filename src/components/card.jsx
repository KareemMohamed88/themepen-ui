import React from 'react'
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";

const Card = ({ data, ID, title, price, picture, sold, date, handleAddToWishList }) => {
    const redirect = useNavigate()
    const token = localStorage.getItem("token")
    return (
        <div key={ID} className="bg-white dark:bg-slate-800 shadow-cardShadow dark:shadow-darkCardShadow" data-aos="zoom-in">
            <div className="overflow-hidden">
                <div className="relative" onClick={() => {
                    token ? redirect(`/project-detalis/${ID}`) : toast.error("you are is not a member please login")
                }}>
                    <img
                        className="object-cover object-center w-full"
                        src={picture}
                        alt="faild"
                    />
                    <div className="absolute right-2 top-2 px-4 py-1 text-white bg-mainColor/90 rounded-sm text-xs">Sold: {sold}</div>
                </div>
            </div>
            <div className="pt-5 pb-2.5 flex px-3 justify-between items-center text-black dark:text-slate-300">
                <p
                    className="hover:underline"
                    onClick={() => {
                        token ? redirect(`/project-detalis/${ID}`) : toast.error("you are is not a member please login")
                    }}
                >
                    {title}
                </p>
                <small className="text-black dark:text-slate-300 text-base flex justify-center">
                    price:{" "}
                    <span className="ml-1">
                        {price <= 0 ? "free" : `${price}$`}
                    </span>
                </small>
            </div>
            <div className="pt-6 pb-3 px-3 flex items-center justify-between">
                <div>
                    <button aria-label={`redirectToDetalis-${ID}`} id={`redirectToDetalis-${ID}`} className="cursor-pointer mr-3 bg-mainColor px-5 text-sm h-10 text-white font-bold rounded" onClick={() => {
                        token ? redirect(`/project-detalis/${ID}`) : toast.error("you are is not a member please login")
                    }}>Learn more</button>
                    <button aria-label={`addToWishList-${ID}`} id={`addToWishList-${ID}`} className="cursor-pointer bg-yellow-500 px-5 text-sm h-10 text-white font-bold rounded" onClick={() => {
                        handleAddToWishList(data)
                    }}><i class="fa-solid fa-bookmark"></i> </button>
                </div>
                <p className="font-bold text-sm text-slate-500 dark:text-slate-300">{date}</p>
            </div>
        </div>
    )
}

export default Card