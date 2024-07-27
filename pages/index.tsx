import { Hero } from "../components/home/Hero/Hero";
import { About } from "../components/home/About/About";
import { Services } from "../components/home/Services/Services";
import { ClientsSection } from "../components/home/Clients/Clients";
import { BlogsSection } from "../components/home/Blogs/Blogs";
import { Contact } from "../components/home/Contact/Contact";
import { motion } from "framer-motion";
import { Blog, Client } from "../data/type";
import Blogs from "../data/blogs/All";
import Clients from "../data/clients/All";
import { useState, useEffect } from "react";
import Head from "next/head";

interface Data {
  image: string;
  title: string;
  category: string;
  btn: { label: string; link: string; disabled?: boolean };
}

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
  const [content, setContent] = useState<null | {
    blogs: Data[] | null;
    clients: Data[] | null;
  }>(null);

  useEffect(() => {
    if (data) {
      setContent(data);
      setLoaded(true);
    }
  }, [data]);

  const sections = [
    <Hero key={1} />,
    <About key={2} />,
    <Services key={3} />,
    <ClientsSection
      clients={content && content.clients ? content.clients : null}
      key={4}
    />,
    <BlogsSection
      blogs={content && content.blogs ? content.blogs : null}
      key={5}
    />,
    <Contact key={6} />,
  ];

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover Anthony's professional portfolio, a Fort Wayne web development expert specializing in Development, E-commerce, SEO, and Optimization. Elevate your digital presence with innovative projects and expert insights. Visit now to learn how Anthony can help bring your web development vision to life."
        />
      </Head>
      {sections.map((section, idx) => (
        <Section key={`section ${idx}`} component={section} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const fetchData = async () => {
    const data: { blogs: Data[] | null; clients: Data[] | null } = {
      blogs: null,
      clients: null,
    };
    data.blogs = Blogs.map((b: Blog, idx: number) => {
      return {
        image: b.image,
        title: b.title,
        category: b.categories[0],
        btn: { label: "READ", link: `/blog/${b.slug}` },
      };
    });

    data.clients = Clients.map((c: Client, idx: number) => {
      return {
        image: c.image,
        title: c.name,
        category: c.categories[0],
        btn: {
          label: c.slug === "gulf-coast-guardians" ? "COMING SOON" : "VIEW",
          link: `/client/${c.slug}`,
          disabled: c.slug === "gulf-coast-guardians",
        },
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
