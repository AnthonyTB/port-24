import { Text } from "@mantine/core";
import { ReactElement } from "react";
import { textProps } from "../../../data/blogs/type";

export default function Paragraph({
  content,
}: {
  content: textProps;
}): ReactElement {
  return <Text component="p">{content.text}</Text>;
}
