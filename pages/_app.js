import "../styles/globals.css"; //_app.jsでしかインポートできないようになっている。

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
