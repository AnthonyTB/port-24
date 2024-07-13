import "@mantine/core/styles.css";
import Head from "next/head";
import { Nav } from "../components/Nav/Nav";
import { MantineProvider, Group, Transition, Loader } from "@mantine/core";
import { theme } from "../theme";
import "../styles/global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <Head>
        <title>{"phoenix"}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="description" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        />
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
