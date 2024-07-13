import { Group } from "@mantine/core";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { Clients } from "../components/Clients/Clients";
import { Blogs } from "../components/Blogs/Blogs";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [<Hero />, <About />, <Services />, <Clients />, <Blogs />];

function Section({ component, idx }) {
  return (
    <motion.div
      key={`section ${idx}`}
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
        <Section idx={idx} component={section} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
