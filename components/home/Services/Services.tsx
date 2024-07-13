import { SimpleGrid, Text, ThemeIcon, rem } from "@mantine/core";
import {
  IconSourceCode,
  IconSeo,
  IconShoppingBag,
  IconLoader,
} from "@tabler/icons-react";
import { ContentSection } from "../../core/ContentSection/ContentSection";

const services = [
  {
    icon: IconSourceCode,
    title: "Development",
    description:
      "I build custom website's that are performant and easy for you to manage once the website is handed off.",
  },
  {
    icon: IconSeo,
    title: "SEO",
    description:
      "I anaylze your customer base and your competition so I can assure your website is ranked higher and easy to find for your customer base.",
  },
  {
    icon: IconShoppingBag,
    title: "E-Commerce",
    description: "I make selling your products and services online a breeze.",
  },
  {
    icon: IconLoader,
    title: "Optimization",
    description:
      "Speed and Responsiveness is crucial for customers having a great experience on your website and I make that a priority by using modern technologies.",
  },
];

export function Services() {
  const items = services.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius="md" variant="gradient">
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <ContentSection
      heading="SERVICES"
      flip={false}
      description="I offer a comprehensive suite of web development services tailored
            to elevate your online presence. I craft
            custom websites that blend aesthetics with functionality, ensuring a
            seamless user experience. Specializing in e-commerce solutions, I
            help businesses create robust online stores that drive sales and
            customer engagement. My SEO services are designed to boost your
            website's visibility, helping you rank higher on search engines and
            attract organic traffic. Additionally, I optimize your site for
            speed, performance, and mobile compatibility, ensuring it runs
            smoothly across all devices. Partner with Phoenix Studio 01 to
            transform your digital footprint and achieve your business goals."
    >
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
        {items}
      </SimpleGrid>
    </ContentSection>
  );
}
