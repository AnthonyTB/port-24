import { ReactElement } from "react";
import { Paragraph, Heading, UL } from "./index";

export default function Element({
  type,
  content,
}: any & { idx: number }): ReactElement | null {
  let element: ReactElement | null = null;
  switch (type) {
    case "p":
      element = <Paragraph content={content} />;
      break;
    case "h":
      element = <Heading content={content} />;
      break;
    case "ul":
      element = <UL content={content} />;
      break;
  }

  return element;
}
