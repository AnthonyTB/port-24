import { useState, useEffect, ReactElement } from "react";
import Blogs from "../../data/blogs/All";
import { useRouter } from "next/router";
import { Blog, BlogSection, Element } from "../../data/blogs/type";
import {
  Badge,
  Container,
  Divider,
  Grid,
  Text,
  Title,
  Flex,
} from "@mantine/core";
import { CenterSection } from "../../components/core/CenterSection/CenterSection";
import { CardsCarousel } from "../../components/core/Carousel/Carousel";
import classes from "./blog.module.css";
import { CTA } from "../../components/core/CTA/CTA";
import { Heading, Paragraph, UL } from "../../components/core/Elements";

const El = ({
  type,
  content,
  idx,
}: Element & { idx: number }): ReactElement | null => {
  let element: ReactElement | null = null;
  switch (type) {
    case "p":
      element = <Paragraph content={content} />;
      break;
    case "h":
      element = <Heading content={content} />;
      break;
    case "ul":
      element = <UL content={content} />;
      break;
  }

  return element;
};

const Section = ({ heading, body }: BlogSection): ReactElement => {
  return (
    <Container my={"xl"} className={classes.wrapper}>
      <div className={classes.inner}>
        {heading ? (
          <Text
            variant="gradient"
            fz={"h3"}
            ff={"Horizon"}
            fw={700}
            component="h3"
          >
            {heading}
          </Text>
        ) : (
          ""
        )}
        {body.map((i, idx) => (
          <El key={`e ${idx}`} idx={idx} type={i.type} content={i.content} />
        ))}
        <div className={classes.corner_1}></div>
        <div className={classes.corner_2}></div>
        <div className={classes.corner_3}></div>
        <div className={classes.corner_4}></div>
      </div>
    </Container>
  );
};

export default function BlogPage({ data }) {
  const [loaded, setLoaded] = useState(false);
  const [blog, setBlog] = useState<null | Blog>(null);
  const router = useRouter();

  useEffect(() => {
    if (!data.blog) {
      router.push("/");
    } else {
      setBlog(data.blog);
      setLoaded(true);
    }
  }, [data.blog]);

  return (
    <Container py={"xl"}>
      {loaded && blog ? (
        <>
          <Title fz={"h2"} ff={"Horizon Outlined"}>
            {blog.title}
          </Title>
          {blog.content.sections.map((section, idx) => (
            <Section
              key={`s ${idx}`}
              heading={section.heading}
              body={section.body}
            />
          ))}
          <Grid gutter={"xl"}>
            <Grid.Col span={{ base: 6 }}>
              <Text fw={700}>Categories</Text>
              <Divider />
              <Flex wrap={"wrap"} mt={"sm"} gap={"sm"} direction={"row"}>
                {blog.categories.map((cat, idx) => (
                  <Badge c={"#242424"} key={`cat ${idx}`} variant="gradient">
                    {cat}
                  </Badge>
                ))}
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 6 }}>
              <Text fw={700}>Published</Text>
              <Divider />
              <Text mt={"sm"}>{blog.created_at}</Text>
            </Grid.Col>
          </Grid>
          {data.other_blogs.length ? (
            <CenterSection heading={{ first_half: "read", highlight: "more" }}>
              <div style={{ padding: "20px" }}>
                <CardsCarousel items={data.other_blogs} />
              </div>
            </CenterSection>
          ) : (
            ""
          )}
          <Grid>
            <Grid.Col span={{ base: 12 }}>
              <Flex direction={"column"} ta={"center"} justify={"center"}>
                <CTA label="RETURN HOME" action={() => router.push("/")} />
              </Flex>
            </Grid.Col>
          </Grid>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

export async function getStaticPaths() {
  // Generate paths for static generation
  const paths = Blogs.map((blog) => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const fetchData = async (slug: string) => {
    let blog: Blog | null = null;
    const other_blogs: {
      image: string;
      title: string;
      category: string;
      btn: { label: string; link: string };
    }[] = [];
    Blogs.forEach((b: Blog, idx: number) => {
      if (b.slug.toLowerCase() === slug.toLowerCase()) {
        blog = b;
      } else {
        other_blogs.push({
          image: b.image,
          title: b.title,
          category: b.categories[0],
          btn: { label: "READ", link: `/blog/${b.slug}` },
        });
      }
    });

    return { blog, other_blogs };
  };

  // Fetch data based on the id
  const data = await fetchData(slug);

  return {
    props: {
      data,
    },
  };
}
