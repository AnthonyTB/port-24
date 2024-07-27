import { Text } from "@mantine/core";
import { ReactElement } from "react";
import { TextProps } from "../../../data/type";

export default function Heading({
  content,
}: {
  content: TextProps;
}): ReactElement {
  return (
    <Text fz={"h5"} mt={"sm"} fw={700} ff={"Horizon"} component="h5">
      {content.text}
    </Text>
  );
}
