import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import TopBar from "../components/TopBar/Index";
import Footer from "../components/Footer/";
import Loader from "../components/Loader/";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
      {pageLoading ? (
       <Loader/>
      ) : (
        <>
          <TopBar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}

</QueryClientProvider>
    </>
  );
}

export default MyApp;
