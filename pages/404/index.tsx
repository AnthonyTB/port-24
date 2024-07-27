import { Container, Title, Text, Button, Group, Image } from "@mantine/core";
import Error from "../../public/assets/images/error.svg";
import classes from "./Error.module.css";
import { CTA } from "../../components/core/CTA/CTA";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <Image src={Error.src} className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>
              Appears we've ventured into uncharted territory
            </Title>
            <Text size="lg" ta="center" className={classes.description}>
              Let's get back to safety and check out some of the blogs and
              client stories.
            </Text>
            <Group justify="center">
              <CTA label="GO BACK" action={() => router.push("/")} />
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
