import { ContentSection } from "../../core/ContentSection/ContentSection";
import { CardsCarousel } from "../../core/Carousel/Carousel";

export function Blogs() {
  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Key to site optimization",
      category: "Website Design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2306&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "What is SEO",
      category: "Marketing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Understanding how user's use your site",
      category: "UI/UX",
    },
  ];

  return (
    <ContentSection
      heading="BLOGS"
      description={
        "I dive into key topics to help you maximize your website's potential. Explore my posts on site optimization, where we share practical tips to boost your site's performance and speed. Learn the fundamentals and advanced strategies of SEO to improve your search engine rankings and drive organic traffic. Discover the importance of UI/UX design and how we enhance user experience by analyzing and understanding user interactions with your website. My expert insights aim to empower you with the knowledge to create a more effective and engaging online presence."
      }
    >
      <CardsCarousel items={blogs} />
    </ContentSection>
  );
}
