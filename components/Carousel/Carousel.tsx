import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Paper, Text, Title, useMantineTheme, rem, Flex } from "@mantine/core";
import classes from "./Carousel.module.css";
import "@mantine/carousel/styles.css";
import { CTA } from "../CTA/CTA";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
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
        <CTA label="READ MORE" action={() => {}} />
      </Flex>
    </Paper>
  );
}

export function CardsCarousel({ items }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = items.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      orientation="horizontal"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
