import "@mantine/core/styles.css";
import { Container, MantineProvider, Card } from "@mantine/core";
import { theme } from "../theme";
import "../styles/global.css";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App({ Component, pageProps }: any) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
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
  );
}
