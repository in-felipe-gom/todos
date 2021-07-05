import type { AppProps } from "next/app";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default CustomApp;
