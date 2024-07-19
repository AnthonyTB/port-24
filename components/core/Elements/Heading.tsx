import { Text } from "@mantine/core";
import { ReactElement } from "react";
import { textProps } from "../../../data/blogs/type";

export default function Heading({
  content,
}: {
  content: textProps;
}): ReactElement {
  return (
    <Text fz={"h5"} mt={"sm"} fw={700} ff={"Horizon"} component="h5">
      {content.text}
    </Text>
  );
}
