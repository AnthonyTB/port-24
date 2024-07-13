import { Group } from "@mantine/core";
import { Hero } from "../components/home/Hero/Hero";
import { About } from "../components/home/About/About";
import { Services } from "../components/home/Services/Services";
import { Clients } from "../components/home/Clients/Clients";
import { Blogs } from "../components/home/Blogs/Blogs";
import { Contact } from "../components/home/Contact/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  <Hero key={1} />,
  <About key={2} />,
  <Services key={3} />,
  <Clients key={4} />,
  <Blogs key={5} />,
  <Contact key={6} />,
];

function Section({ component }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
    >
      {component}
    </motion.div>
  );
}

export default function IndexPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      {sections.map((section, idx) => (
        <Section key={`section ${idx}`} component={section} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
