import { Text } from "@mantine/core";
import { ReactElement } from "react";
import { TextProps } from "../../../data/blogs/type";

export default function Paragraph({
  content,
}: {
  content: TextProps;
}): ReactElement {
  return <Text component="p">{content.text}</Text>;
}
