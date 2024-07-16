import { ContentSection } from "../../core/ContentSection/ContentSection";
import { CardsCarousel } from "../../core/Carousel/Carousel";
import Quest from "../../../public/assets/images/quest.jpg";

const clients = [
  {
    image: "https://www.1838.bar/_next/static/media/HeroImg.05122abd.jpg",
    title: "1838 Bourbon & Wine Bar",
    category: "Website Design & SEO",
    btn: { label: "COMING SOON", link: "#", disabled: true },
  },
  {
    image: Quest.src,
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
