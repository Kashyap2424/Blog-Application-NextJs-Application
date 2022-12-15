import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";

import "../styles/globals.scss";
import { Layout } from "../Components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
