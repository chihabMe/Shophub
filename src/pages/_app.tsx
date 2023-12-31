import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../global.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default trpc.withTRPC(MyApp);
