import "../styles/globals.css";
import type { AppProps } from "next/app";
import TopBar from "../components/TopBar/Index";
import Footer from "../components/Footer/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
