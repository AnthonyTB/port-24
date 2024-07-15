import {
  Image,
  Container,
  BackgroundImage,
  Title,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { CTA } from "../../core/CTA/CTA";
import classes from "./Hero.module.css";
import { useRouter } from "next/navigation";
import Sig from "../../../public/assets/images/sig.png";

export function Hero() {
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Container size={"xl"}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className="branding" c={"white"} fw={900}>
              anthony
              <Text variant="gradient" ff={"Roboto"} component="span">
                .
              </Text>
            </Title>
            <Title className={classes.title}>
              I WILL HELP YOU{" "}
              <Text
                component="span"
                style={{ fontFamily: "Horizon, san" }}
                inherit
                variant="gradient"
              >
                RISE ABOVE
              </Text>{" "}
              YOUR COMPETITION
            </Title>

            <Text className={classes.description} my={30}>
              I specialize in crafting unique and innovative web solutions
              tailored to your business needs. I combine creativity with
              cutting-edge technology to ensure your online presence is not just
              seen, but remembered. Let us transform your vision into a digital
              masterpiece that sets you apart in a crowded marketplace.
            </Text>

            <CTA
              label="WORK WITH ME"
              action={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
