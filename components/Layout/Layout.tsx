import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }:any) => {

  return (
    <div className="layout">
      <Head>
        <title>Music store</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )}

export default Layout;