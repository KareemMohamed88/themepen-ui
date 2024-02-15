import Footer from "../components/Foot";
import ProductsList from "../components/ProductsList";
import Hero from './../components/hero';
import Cards from "../components/cards";
import { Helmet } from 'react-helmet-async';
import Categories from './../components/categories';
import FollowUs from "../components/FollowUs";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Themepen</title>
        <meta name="description" content="theme pen home page" />
      </Helmet>
      <Hero />
      <Categories/>
      <ProductsList />
      <FollowUs/>
      <Footer />
    </>
  );
};

export default Home;
