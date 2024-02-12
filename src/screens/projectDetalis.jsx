/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Foot from './../components/Foot';
import { useSelector, useDispatch } from 'react-redux';
import { like, desLike } from "../projects/likeSlice";
import { addToWishListSpecificProject, deleteFromWishList } from "../projects/wishListSlice";
import { Helmet } from 'react-helmet-async';
import BarLoader from "react-spinners/BarLoader";

const ProjectDetalis = () => {
  const dispatch = useDispatch()
  const Params = useParams();
  const move = useRef()
  const [comment, setComment] = useState({
    userId: "",
    userName: "",
    userImage: "",
    content: ""
  })
  const randomColors = ["bg-rose-500", "bg-green-500", "bg-yellow-500", "bg-blue-500"]
  const globalApi = "https://v2-server.onrender.com/";
  const devApi = "http://localhost:9001/"
  const [randomBg, setRandomBg] = useState(0)
  const [project, setProject] = useState({});
  const [comments, setComments] = useState([])
  const [updateAreaValue, setUpdateAreaValue] = useState("false")
  const [isLiked, setIsLiked] = useState(false)
  const [isWished, setIsWished] = useState(false)
  const [error, setError] = useState(true)
  const [showedComments, setShowedComments] = useState(4)
  const id = JSON.parse(localStorage.getItem("user-data"))
  const {
    userId,
    userName,
    userImage,
    content
  } = comment

  const liked = useSelector((state) => state.likedItems)
  const wishList = useSelector((state) => state.wishList)
  const fetchData = async () => {
    await Axios(`${globalApi}projects/${Params.id}/project`).then((res) => {
      setProject(res.data)
      setError(false)
    })

  };

  const handleDeleteComment = async (id) => {
    const res = await Axios.delete(`${globalApi}comments/deleteComment/${id}`)
    console.log(res)
  }

  const handleCreateComment = async (e) => {
    e.preventDefault()
    await Axios.post(`${globalApi}comments/createComment`, { ...comment })
    setComment({
      ...comment,
      userId,
      userName,
      userImage,
      content,
    })
  }

  const handleUpdateComment = async (id) => {
    Axios.put(`${globalApi}comments/updateComment/${id}`, { ...comment })
    setComment({
      ...comment,
      userId,
      userName,
      userImage,
      content,
    })
    setUpdateAreaValue(false)
  }

  const handleShowUpdateArea = (comId) => {
    setUpdateAreaValue(comId)
  }

  const handleAddLike = (id) => {
    dispatch(like(id))
    Axios.put(`${globalApi}likes/addLike/${id}`)
  }

  const handleIncSold = (id) => {
    Axios.put(`${globalApi}sold/incSold/${project._id}`)
  }

  const handleDesLike = (id) => {
    dispatch(desLike(id))
    Axios.put(`${globalApi}likes/desLike/${id}`)
  }

  const handleAddToWishList = (id) => {
    dispatch(addToWishListSpecificProject(id))
  }

  const handleDeleteToWishList = (id) => {
    dispatch(deleteFromWishList(id))
  }

  const getComments = async () => {
    const res = await Axios.get(`${globalApi}comments/getComments/${project._id}`)
    setComments(res.data)
  }

  const moveDown = () => {
    move.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  useEffect(() => {
    fetchData();
    getComments()
  });
  useEffect(() => {
    window.scrollTo(0, 0)
    let select = randomColors[Math.floor(Math.random() * randomColors.length)]
    setRandomBg(select)
  }, [])

  useEffect(() => {
    async function check() {
      const likesArr = liked.likeProjects
      const projectArr = wishList.wishListItems

      let likesResult = await likesArr.find((like) => like.id === project._id);
      let projectsResult = await projectArr.find((item) => item._id === project._id);

      likesResult?.id === project._id ? setIsLiked(true) : setIsLiked(false)
      projectsResult?._id === project._id ? setIsWished(true) : setIsWished(false)
    }
    check()
  })


  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <BarLoader color="#4e67eb" />
      </div>
    )
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-12 md:px-8 gap-4">
        <figure className="cols-pan-1 flex justify-center">
          <ul className="fixed md:relative bottom-0 md:bottom-auto p-5 md:p-0 w-full md:w-fit bg-white dark:bg-slate-900 md:bg-transparent md:dark:bg-transparent z-50 flex justify-between md:justify-start items-center md:items-start flex-row md:flex-col">
            <li className="mx-5 md:my-7 text-xl text-center md:flex md:flex-col dark:text-white" onClick={() => {
              isLiked ? handleDesLike(project._id) : handleAddLike(project._id)
            }}>
              <span><i className={`fa-${isLiked ? "solid text-rose-500" : "regular"} fa-heart text-xl hover:text-rose-500 cursor-pointer mr-3 md:mr-0`}></i></span>
              <span className="text-xs font-sans">{project.likes}</span>
            </li>
            <li className="mx-5 md:my-7 text-xl text-center md:flex md:flex-col dark:text-white">
              <span onClick={moveDown}><i className="fa-regular fa-comment hover:text-emerald-500 cursor-pointer mr-3 md:mr-0"></i></span>
              <span className="text-xs font-sans">{comments?.length}</span>
            </li>
            <li onClick={() => {
              isWished ? handleDeleteToWishList(project) : handleAddToWishList(project)
            }} className="mx-5 md:my-7 text-xl dark:text-white"><i className={`fa-${isWished ? "solid text-yellow-500" : "regular"} fa-bookmark hover:text-yellow-500 cursor-pointer`}></i></li>
          </ul>
        </figure>
        <figure className="col-span-1 md:col-span-7 md:rounded-lg overflow-hidden bg-white dark:bg-slate-900 ">
          <div>
            <img src={project.picture} alt="" />
          </div>
          <div className="px-5 py-6 space-y-6">
            <div className="text-xl font-bold text-slate-800 dark:text-slate-300 flex justify-between">
              <h2>{project.title}</h2>
              <h2>Price:  {project.price <= 0 ? "free" : `${project.price}$`}</h2>
            </div>
            <div>
              <img src={project.secondImage} alt="" />
            </div>
            <p className="text-base text-slate-800 dark:text-slate-300 md:text-lg">
              {project.description}
            </p>
            <div className="flex justify-center">
              <a onClick={handleIncSold} className="flex w-full" href={project.price <= 0? project.downloadUrlLink: project.checkOutLink} target="_blank">
                <button id="download" className="bg-mainColor hover:bg-indigo-700 mx-auto text-white font-medium w-100% md:w-70% h-12 rounded-md">{project.price <= 0 ? "Download for free" : "Buy now"}</button>
              </a>
            </div>
            <p className="flex text-blue-500 flex-wrap">
              <span className="mr-2 text-slate-800 dark:text-slate-300 h-fit">technologies:</span>
              {project.tech}
            </p>
            <ul>
              <li className="my-4 flex items-center">
                <p className="text-base text-slate-800 dark:text-slate-300 mr-3">
                  easy code to edit
                </p>
                <img
                  width="15px"
                  src={require("../assets/checked.png")}
                  alt=""
                />
              </li>
              <li className="my-4 flex items-center">
                <p className="text-base text-slate-800 dark:text-slate-300 mr-3">
                  something exclusive
                </p>
                <img
                  width="15px"
                  src={require("../assets/checked.png")}
                  alt=""
                />
              </li>
              <li className="my-4 flex items-center">
                <p className="text-base text-slate-800 dark:text-slate-300 mr-3">24/7 support</p>
                <img
                  width="15px"
                  src={require("../assets/checked.png")}
                  alt=""
                />
              </li>
              <li className="my-4 flex items-center">
                <p className="text-base text-slate-800 dark:text-slate-300 mr-3">free project</p>
                <img
                  width="15px"
                  src={require(project.price <= 0
                    ? "../assets/checked.png"
                    : "../assets/error.png")}
                  alt=""
                />
              </li>
            </ul>
            <div className="w-full">
              <form ref={move} onSubmit={handleCreateComment}>
                <textarea onChange={e => setComment({ ...comment, content: e.target.value, userName: id.firstName, userImage: id.picture, userId: id._id, projectId: project._id })} className="w-full h-20 border-2 dark:bg-slate-800 outline-none border-gray-200/20 rounded-lg p-4 dark:text-white" placeholder="Add your comment"></textarea>
                <button id="submitComment" className="bg-mainColor text-white px-7 py-3 font-bold rounded-md">Submit</button>
              </form>
              <div className="pl-3 md:pl-12 text-center relative">
                {comments?.slice(0, showedComments).map((com) => (
                  <div className="flex my-7 text-start" key={com._id}>
                    <img className="h-10 w-10 rounded-full mr-4" src={com.userImage} alt="" />
                    <div className="border-2 border-gray-200/20 w-full p-4">
                      <div className="flex justify-between">
                        <a href={id._id === com.userId ? "/profile" : `/user/profile/${com.userId}`} className="mb-2 dark:text-white font-sans text-lg hover:text-indigo-500">{com.userName}</a>
                        {id._id === com.userId ? <ul className="flex gap-x-4">
                          <li>
                            <button id="deleteComment" className="text-slate-800 dark:text-slate-400" onClick={() => {
                              handleDeleteComment(com._id)
                            }}><i className="fa-solid fa-trash-can-arrow-up"></i></button>
                          </li>
                          <li>
                            <button id="showUpdateInput" className="text-slate-800 dark:text-slate-400" onClick={() => {
                              handleShowUpdateArea(updateAreaValue === com._id ? "" : com._id)
                            }}><i className="fa-solid fa-square-pen"></i></button>
                          </li>
                        </ul> : null}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-200 break-all">{updateAreaValue === com._id ? <div>
                        <form onSubmit={(e) => {
                          handleUpdateComment(com._id)
                          e.preventDefault()
                        }}>
                          <input placeholder={com.content} className="w-full h-10 border-2 dark:bg-slate-800 outline-none border-gray-200/20 rounded-lg p-4 dark:text-white" onChange={e => setComment({ ...comment, content: e.target.value, userName: id.firstName, userImage: id.picture, userId: id._id, projectId: project._id })} type="text" />
                          <button id="submitUpdate" className="bg-mainColor text-white px-4 mt-2 py-2 font-bold rounded-lg text-sm">update</button>
                        </form>
                      </div> : com.content}</p>
                    </div>
                  </div>
                ))}
                {comments.length >= 5 ? <button id="showAllComments" onClick={() => setShowedComments(showedComments === 4 ? comments.length : 4)} className="text-slate-900 dark:text-slate-300 hover:text-indigo-500 hover:dark:text-indigo-500">{showedComments === 4 ? "Show more" : "Show less"}</button> : null}
              </div>
            </div>
          </div>
        </figure>
        <figure className="col-span-1 md:col-span-4 relative">
          <div className="h-fit w-full bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
            <div className={`w-full h-12 ${randomBg} text-white flex items-center px-4`}>Summary</div>
            <div className="p-6 grid gap-y-2">
              <h2 className="text-gray-900 dark:text-white mb-2 text-xl">{project.title}</h2>
              <p className="text-gray-900 dark:text-white summary-p">{project.description}...</p>
              <p className="text-gray-900 dark:text-white">Sold: {project.sold}</p>
              <h4 className="text-gray-900 dark:text-white ">Price: {project.price <= 0 ? "free" : `${project.price}$`}</h4>
            </div>
          </div>
        </figure>
      </div>
      <div className="md:h-16"></div>
      <Foot />
      <div className="w-full p-8 md:hidden block"></div>
    </React.Fragment >
  );
};

export default ProjectDetalis;