import React, { FC } from "react";
import { HeroBanner, FooterBanner, Product } from "../components";
import client from "../lib/client";

interface HomeProps {
  products: any[];
  bannerData: any[];
}

const Home: FC<HomeProps> = ({ products, bannerData }) => {
  return (
    <div className="products">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products__heading">
        <h2>Best Selling Products</h2>
        <p>Only you and your music</p>
      </div>
      <div className="products__container">
        {products?.map((product) => (
          <Product key={product} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
