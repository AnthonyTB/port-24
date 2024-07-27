import { ContentSection } from "../../core/ContentSection/ContentSection";
import { Skeleton } from "@mantine/core";
import { CardsCarousel } from "../../core/Carousel/Carousel";

export function ClientsSection({ clients }) {
  return (
    <ContentSection
      heading="CLIENTS"
      flip={true}
      description="I understand the unique needs of businesses in the bar and restaurant industry, the outdoorsman sector, and property management. Whether you're looking to attract more patrons with a visually stunning and user-friendly website, showcase your outdoor gear and services to a passionate audience, or streamline your property listings and management processes, my tailored web development solutions are designed to help you stand out. With expertise in e-commerce, SEO, and optimization, I ensure your online presence is not only attractive but also highly effective in driving growth and engagement."
    >
      {clients ? <CardsCarousel items={clients} /> : <Skeleton height={400} />}
    </ContentSection>
  );
}
