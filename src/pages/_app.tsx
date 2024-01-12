import type { AppProps } from "next/app";

import "@/styles/style.css";
import { RootProvider } from "@/components/providers";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
}
