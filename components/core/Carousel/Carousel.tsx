"use client";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Paper, Text, Title, useMantineTheme, rem, Flex } from "@mantine/core";
import classes from "./Carousel.module.css";
import "@mantine/carousel/styles.css";
import { CTA } from "../CTA/CTA";
import { useRouter } from "next/router";

interface CardProps {
  image: string;
  title: string;
  category: string;
  btn: { label: string; link: string; disabled?: boolean };
}

function Card({ image, title, category, btn }: CardProps) {
  const router = useRouter();
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "top center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Flex style={{ alignSelf: "center" }} direction={"column"}>
        <CTA
          label={btn.label}
          disabled={btn.disabled}
          action={() => {
            router.push(btn.link);
          }}
        />
      </Flex>
    </Paper>
  );
}

export function CardsCarousel({ items }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`, true);
  console.log({ mobile });
  const slides = items.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: 2, sm: "xl" }}
      align="start"
      orientation="horizontal"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
