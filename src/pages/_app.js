import "../styles/globals.css";
import { DebtProvider } from "../contexts/DebtsContext";

function MyApp({ Component, pageProps }) {
  return (
    <DebtProvider>
      <Component {...pageProps} />
    </DebtProvider>
  );
}

export default MyApp;
