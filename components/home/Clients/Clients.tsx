import { ContentSection } from "../../core/ContentSection/ContentSection";
import { CardsCarousel } from "../../core/Carousel/Carousel";

const clients = [
  {
    image: "https://www.1838.bar/_next/static/media/HeroImg.05122abd.jpg",
    title: "1838 Bourbon & Wine Bar",
    category: "Website Design & SEO",
    btn: { label: "COMING SOON", link: "#", disabled: true },
  },
  {
    image:
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/415942687_721761553432034_2809138020556936425_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2ikA1ZbSRa4Q7kNvgFT-8UV&_nc_ht=scontent-ord5-1.xx&oh=00_AYBHjq9LBXfsyS0yZhkBSKNpx4WnYHBrMzDCHyQTQJsDAA&oe=6695E9B1",
    title: "Quest Hunt Co.",
    category: "Website Design & SEO",
    btn: { label: "COMING SOON", link: "#", disabled: true },
  },
  {
    image:
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gulf Coast Guardians",
    category: "Website Design & SEO",
    btn: { label: "COMING SOON", link: "#", disabled: true },
  },
];

export function ClientsSection() {
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
