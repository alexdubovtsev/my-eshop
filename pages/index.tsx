import React from "react";
import { HeroBanner, FooterBanner, Product } from "../components";
import client from "../lib/client"

const Home = ({ products, bannerData }) => {
  
  
  return (
    <div className="products">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className="products__heading">
        <h2>Best Selling Products</h2>
        <p>Only you and your music</p>
      </div>
      <div className="products__container">
        {products?.map((product: { name: any; }) => product.name)}
      </div>

      <FooterBanner/>
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home;