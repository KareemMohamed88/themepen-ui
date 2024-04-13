"use-client";
import Header from "@/components/1-Header/Header"
import Hero from "@/components/2-Hero/Hero"
import Services from './../components/3-Services/Services';
import Video from '@/components/4-video/Video';
import ProductsList from '@/components/5-Products/Products';
import Register from '@/components/6-Register/Register';
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const index = () => {
  return (
     <ReduxProvider>
       <ToastContainer progressStyle={{backgroundColor: "#6366f1"}}/>
          <Header />
          <Hero />
          <Services />
          <Video />
          <ProductsList />
          <Register />
          <Footer/>
     </ReduxProvider>
  )
}

export default index