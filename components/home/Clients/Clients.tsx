import { ContentSection } from "../../core/ContentSection/ContentSection";
import { CardsCarousel } from "../../core/Carousel/Carousel";

const clients = [
  {
    image: "https://www.1838.bar/_next/static/media/HeroImg.05122abd.jpg",
    title: "1838 Bourbon & Wine Bar",
    category: "Website Design & SEO",
  },
  {
    image:
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/415942687_721761553432034_2809138020556936425_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2ikA1ZbSRa4Q7kNvgFT-8UV&_nc_ht=scontent-ord5-1.xx&oh=00_AYBHjq9LBXfsyS0yZhkBSKNpx4WnYHBrMzDCHyQTQJsDAA&oe=6695E9B1",
    title: "Quest Hunt Co.",
    category: "Website Design & SEO",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Gulf Coast Guardians",
    category: "Website Design & SEO",
  },
];

export function Clients() {
  return (
    <ContentSection
      heading="CLIENTS"
      flip={true}
      description="I understand the unique needs of businesses in the bar and restaurant industry, the outdoorsman sector, and property management. Whether you're looking to attract more patrons with a visually stunning and user-friendly website, showcase your outdoor gear and services to a passionate audience, or streamline your property listings and management processes, my tailored web development solutions are designed to help you stand out. With expertise in e-commerce, SEO, and optimization, I ensure your online presence is not only attractive but also highly effective in driving growth and engagement."
    >
      <CardsCarousel items={clients} />
    </ContentSection>
  );
}
