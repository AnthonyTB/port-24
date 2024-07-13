import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider, Transition } from "@mantine/core";
import { theme } from "../theme";
import "../styles/global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <Head>
        <title>{"anthony | "}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Transition
        mounted={true}
        transition={"slide-right"}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <div className="global">
            <Component style={transitionStyle} {...pageProps} />
          </div>
        )}
      </Transition>
    </MantineProvider>
  );
}
