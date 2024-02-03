import Footer from "../components/Foot";
import ProductsList from "../components/ProductsList";
import Hero from './../components/hero';
import Cards from "../components/cards";
import { Helmet } from 'react-helmet-async';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="theme pen home page" />
      </Helmet>
      <Hero />
      <Cards/>
      <ProductsList />
      <Footer />
    </>
  );
};

export default Home;
