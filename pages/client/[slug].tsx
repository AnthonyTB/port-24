import {
  Overlay,
  Container,
  Title,
  useMantineTheme,
  Text,
  Grid,
  Flex,
} from "@mantine/core";
import classes from "./client.module.css";
import { Client } from "../../data/type";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Clients from "../../data/clients/All";
import { Element } from "../../components/core/Elements";
import { StatCard } from "../../components/core/StatCard/StatCard";
import { useMediaQuery } from "@mantine/hooks";
import { CenterSection } from "../../components/core/CenterSection/CenterSection";
import { CardsCarousel } from "../../components/core/Carousel/Carousel";
import { CTA } from "../../components/core/CTA/CTA";

function Section({
  idx,
  heading,
  children,
}: {
  idx: string;
  heading: string;
  children: any;
}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Grid align="center" my={"xl"}>
      <Grid.Col mx={"auto"} span={{ base: 11, sm: 1 }}>
        <Title
          style={
            mobile
              ? {}
              : { textOrientation: "mixed", writingMode: "vertical-lr" }
          }
          ta={"left"}
          fz={mobile ? 26 : 50}
          ff={"Horizon Outlined"}
        >
          {idx}
          <Text component="span" fz={mobile ? 26 : 50} ff={"Horizon"}>
            .
          </Text>{" "}
          <Text
            component="span"
            ff={"Horizon"}
            variant="gradient"
            fz={mobile ? 26 : 50}
          >
            {heading}
          </Text>
        </Title>
      </Grid.Col>
      <Grid.Col mx={"auto"} pos={"relative"} span={{ base: 10 }}>
        {children}
        <div className="corner_1" />
        <div className="corner_2" />
        <div className="corner_3" />
        <div className="corner_4" />
      </Grid.Col>
      <Grid.Col visibleFrom="sm" mx={"auto"} span={{ base: 1 }} />
    </Grid>
  );
}

export default function ClientPage({ data }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState<null | Client>(null);
  const router = useRouter();

  useEffect(() => {
    if (!data.client) {
      router.push("/");
    } else {
      setClient(data.client);
      setLoaded(true);
    }
  }, [data.client]);

  return (
    <>
      {loaded && client ? (
        <>
          <div
            style={{
              backgroundImage: `url(${client.image})`,
            }}
            className={classes.hero}
          >
            <Overlay
              gradient="linear-gradient(180deg, rgba(46, 46, 46, 0.65) 80%, rgba(46, 46, 46, 1) 100%)"
              opacity={1}
              zIndex={0}
            />
            <Container className={classes.container} size="xxl">
              <Title ff={"Horizon Outlined"} className={classes.title}>
                {client.name}
              </Title>
              <Text className={classes.description} size="xl" mt="xl">
                {client.short}
              </Text>
            </Container>
          </div>
          <Section idx={"01"} heading="CONCEPTION">
            {client.content.evaluation.map((el, idx) => (
              <Element
                key={`el ${idx}`}
                idx={idx}
                type={el.type}
                content={el.content}
              />
            ))}
          </Section>
          <Section idx={"02"} heading="EXECUTION">
            {client.content.implementation.map((el, idx) => (
              <Element
                key={`el ${idx}`}
                idx={idx}
                type={el.type}
                content={el.content}
              />
            ))}
          </Section>
          <Section idx={"03"} heading="CONCLUSION">
            {client.stats ? (
              <Flex
                my={"xl"}
                direction={mobile ? "column" : "row"}
                wrap={"wrap"}
              >
                {client.stats.map((stat, idx) => (
                  <StatCard
                    key={`stat ${idx}`}
                    title={stat.title}
                    stat={stat.value}
                    description={stat.description}
                  />
                ))}
              </Flex>
            ) : (
              ""
            )}

            {client.content.conclusion.map((el, idx) => (
              <Element
                key={`el ${idx}`}
                idx={idx}
                type={el.type}
                content={el.content}
              />
            ))}
          </Section>
          {data.other_clients.length ? (
            <Grid mb={"xl"}>
              <Grid.Col mx={"auto"} span={{ base: 11, sm: 12 }}>
                <CenterSection
                  heading={{
                    first_half: "view",
                    highlight: "more",
                    later_half: "clients",
                  }}
                >
                  <div style={{ padding: "20px" }}>
                    <CardsCarousel items={data.other_clients} />
                  </div>
                </CenterSection>
              </Grid.Col>
            </Grid>
          ) : (
            ""
          )}
          <Grid mb={"xl"}>
            <Grid.Col mx={"auto"} span={{ base: 10 }}>
              <Flex direction={"column"} ta={"center"} justify={"center"}>
                <CTA label="RETURN HOME" action={() => router.push("/")} />
              </Flex>
            </Grid.Col>
          </Grid>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export async function getStaticPaths() {
  const paths = Clients.map((c: Client) => {
    return {
      params: {
        slug: c.slug,
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const fetchData = async (slug: string) => {
    let client: Client | null = null;
    const other_clients: {
      image: string;
      title: string;
      category: string;
      btn: { label: string; link: string; disabled: boolean };
    }[] = [];
    Clients.forEach((c: Client, idx: number) => {
      if (c.slug.toLowerCase() === slug.toLowerCase()) {
        client = c;
      } else {
        other_clients.push({
          image: c.image,
          title: c.name,
          category: c.categories[0],
          btn: {
            label: c.slug === "gulf-coast-guardians" ? "COMING SOON" : "VIEW",
            link: `/client/${c.slug}`,
            disabled: c.slug === "gulf-coast-guardians",
          },
        });
      }
    });

    return { client, other_clients };
  };

  const data = await fetchData(slug);

  return {
    props: {
      data,
    },
  };
}
