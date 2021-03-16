import { DashLayout } from "../components/layout";

import "../styles/globals.css";
import Progress from "../components/Progress";

function App({ Component, pageProps, router }) {
  Progress();

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
