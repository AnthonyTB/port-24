import { Title, Text, Container } from "@mantine/core";
import classes from "./CenterSection.module.css";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export function CenterSection({
  heading,
  children,
}: {
  heading: { first_half: string; highlight: string; later_half?: string };
  children: ReactElement;
}) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className={classes.inner}>
          <Title ff={"Horizon Outlined"} className={classes.title}>
            {heading.first_half}{" "}
            <Text
              component="span"
              variant="gradient"
              ff={"Horizon"}
              className={classes.highlight}
              inherit
            >
              {heading.highlight}
            </Text>{" "}
            {heading.later_half}
          </Title>

          <Container mt={100} p={0} className={classes.about}>
            <div className={classes.corner_1}></div>
            <div className={classes.corner_2}></div>
            <div className={classes.corner_3}></div>
            <div className={classes.corner_4}></div>
            {children}
          </Container>
        </div>
      </motion.div>
    </Container>
  );
}
