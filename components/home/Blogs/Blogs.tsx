import { ContentSection } from "../../core/ContentSection/ContentSection";
import { CardsCarousel } from "../../core/Carousel/Carousel";
import { Skeleton } from "@mantine/core";

export function BlogsSection({ blogs }) {
  return (
    <ContentSection
      heading="BLOGS"
      description={
        "I dive into key topics to help you maximize your website's potential. Explore my posts on site optimization, where we share practical tips to boost your site's performance and speed. Learn the fundamentals and advanced strategies of SEO to improve your search engine rankings and drive organic traffic. Discover the importance of UI/UX design and how we enhance user experience by analyzing and understanding user interactions with your website. My expert insights aim to empower you with the knowledge to create a more effective and engaging online presence."
      }
    >
      {blogs ? <CardsCarousel items={blogs} /> : <Skeleton height={400} />}
    </ContentSection>
  );
}
