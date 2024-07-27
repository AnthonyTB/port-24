import { Icon } from "@tabler/icons-react";

export interface TextProps {
  text: string;
}

export interface ListProps {
  bold: string;
  text: string;
}

export interface ParagraphElement {
  type: "p";
  content: TextProps;
}

export interface HeadingElement {
  type: "h";
  content: TextProps;
}

export interface ListElement {
  type: "ul";
  content: ListProps[];
}

export type Element = ParagraphElement | HeadingElement | ListElement;

export interface BlogSection {
  heading: string;
  body: Element[];
}

export interface Blog {
  title: string;
  image: string;
  meta: string;
  categories: Array<
    "SEO" | "Performance" | "Testing" | "Development" | "UI/UX"
  >;
  slug: string;
  created_at: string;
  content: { sections: BlogSection[] };
}

export interface Client {
  name: string;
  image: string;
  meta: string;
  short: string;
  categories: Array<"SEO" | "Development" | "UI/UX Improvement">;
  slug: string;
  stats?: { title: string; description: string; value: string }[];
  created_at: string;
  content: {
    evaluation: Element[];
    implementation: Element[];
    conclusion: Element[];
  };
}
