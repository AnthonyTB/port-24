export interface textProps {
  text: string;
}

export interface listProps {
  bold: string;
  text: string;
}

export interface Element {
  type: "p" | "ul" | "h";
  content: textProps | listProps[];
}

export interface BlogSection {
  heading: string;
  body: Element[];
}

export interface Blog {
  title: string;
  image: string;
  categories: Array<
    "SEO" | "Performance" | "Testing" | "Development" | "UI/UX"
  >;
  slug: string;
  created_at: string;
  content: { sections: BlogSection[] };
}
