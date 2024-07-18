import { Hero } from "../components/home/Hero/Hero";
import { About } from "../components/home/About/About";
import { Services } from "../components/home/Services/Services";
import { ClientsSection } from "../components/home/Clients/Clients";
import { BlogsSection } from "../components/home/Blogs/Blogs";
import { Contact } from "../components/home/Contact/Contact";
import { motion } from "framer-motion";
import { Blog } from "../data/blogs/type";
import Blogs from "../data/blogs/All";
import { useState, useEffect } from "react";

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

export default function IndexPage({ data }) {
  const [loaded, setLoaded] = useState(false);
  const [blogs, setBlogs] = useState<
    | null
    | {
        image: string;
        title: string;
        btn: { label: string; link: string; category: string };
      }[]
  >(null);

  useEffect(() => {
    console.log(data);
    if (data) {
      setBlogs(data);
      setLoaded(true);
    }
  }, [data]);

  const sections = [
    <Hero key={1} />,
    <About key={2} />,
    <Services key={3} />,
    <ClientsSection key={4} />,
    <BlogsSection blogs={blogs} key={5} />,
    <Contact key={6} />,
  ];

  return (
    <>
      {sections.map((section, idx) => (
        <Section key={`section ${idx}`} component={section} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const fetchData = async () => {
    const data = Blogs.map((b: Blog, idx: number) => {
      return {
        image: b.image,
        title: b.title,
        category: b.categories[0],
        btn: { label: "READ", link: `/blog/${b.slug}` },
      };
    });

    return data;
  };

  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}
