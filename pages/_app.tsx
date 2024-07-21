import "@mantine/core/styles.css";
import { Container, MantineProvider, Card } from "@mantine/core";
import { theme } from "../theme";
import "../styles/global.css";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";

export default function App({ Component, pageProps }: any) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                      })(window, document, "clarity", "script", "n7tdssfpf4");`,
          }}
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>{"anthony"}</title>
      </Head>
      <MantineProvider forceColorScheme="dark" theme={theme}>
        <div className="global">
          <Container py={"xl"} size={1400}>
            <Card padding={0} radius={"xl"}>
              <Component {...pageProps} />
            </Card>
          </Container>
        </div>
        <motion.div className="progress" style={{ scaleX }} />
      </MantineProvider>
    </>
  );
}
