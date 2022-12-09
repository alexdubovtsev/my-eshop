import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { Layout } from "../components";
import StateContext from "../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
