import { List, ThemeIcon, rem, Text, Space } from "@mantine/core";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { ReactElement } from "react";
import { ListProps } from "../../../data/blogs/type";

export default function UL({
  content,
}: {
  content: ListProps[];
}): ReactElement {
  return (
    <List
      spacing="xs"
      size="sm"
      mt={"md"}
      center
      icon={
        <ThemeIcon variant="gradient" size={24} radius="xl">
          <IconCircleDashedCheck
            color="#242424"
            style={{ width: rem(20), height: rem(20) }}
          />
        </ThemeIcon>
      }
    >
      {Array.isArray(content)
        ? content.map((li: ListProps, i: number) => (
            <List.Item key={`li ${i}`}>
              <Text tt={"uppercase"} fw={900} component={"span"}>
                {li.bold}
              </Text>
              <Space />
              {li.text}
            </List.Item>
          ))
        : ""}
    </List>
  );
}
