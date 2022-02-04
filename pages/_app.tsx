import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globat";
import { ToastContainer } from "react-toastify";
import "../styles/floatbutton.css";
import "react-toastify/dist/ReactToastify.min.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
      <ToastContainer />
    </>
  );
}

export default MyApp;
