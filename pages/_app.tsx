import "@mantine/core/styles.css";
import { MantineProvider, Transition } from "@mantine/core";
import { theme } from "../theme";
import "../styles/global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
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
