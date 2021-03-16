import { DashLayout } from "../components/layout";

import "../styles/globals.css";

function App({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/panel")) {
    return (
      <DashLayout>
        <Component {...pageProps} />
      </DashLayout>
    );
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
