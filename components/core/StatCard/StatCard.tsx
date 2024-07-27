import { ReactElement } from "react";
import { Text } from "@mantine/core";
import classes from "./StatCard.module.css";

export function StatCard({
  title,
  stat,
  description,
}: {
  title: string;
  stat: string;
  description: string;
}): ReactElement {
  return (
    <div key={title} className={classes.stat}>
      <Text className={classes.count}>{stat}</Text>
      <Text className={classes.title}>{title}</Text>
      <Text className={classes.description}>{description}</Text>
    </div>
  );
}
