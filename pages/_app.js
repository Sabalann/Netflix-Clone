import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
      <>
        <title>Netflix-Clone</title>
        <Component {...pageProps} />
      </>
  );
}
