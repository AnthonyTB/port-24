import { Title, Text, Button, Grid, useMantineTheme } from "@mantine/core";
import classes from "./ContentSection.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { ReactElement } from "react";
import { motion } from "framer-motion";

interface IProps {
  button?: { label: string; onClick: () => void } | null;
  heading: string;
  description: string;
  children: ReactElement;
  flip?: boolean;
}

export function ContentSection({
  heading,
  description,
  flip = false,
  button = null,
  children,
}: IProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <div className={classes.wrapper}>
      <Grid align="center" gutter={80}>
        <Grid.Col order={flip && !mobile ? 1 : 0} span={{ base: 12, md: 5 }}>
          <motion.div
            initial={{ x: flip && !mobile ? "100%" : "-100%", opacity: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <Title className={classes.title} ff={"Horizon Outlined"}>
              MY{" "}
              <Text component="span" variant="gradient" ff={"Horizon"} inherit>
                {heading}
              </Text>
            </Title>
            <Text c="dimmed">{description}</Text>
            {button ? (
              <Button variant="gradient" size="xs" mt="xl">
                {button.label}
              </Button>
            ) : (
              ""
            )}
          </motion.div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <motion.div
            initial={{ x: flip && !mobile ? "-100%" : "100%", opacity: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            {children}
          </motion.div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
