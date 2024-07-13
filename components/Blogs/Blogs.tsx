import { ContentSection } from "../ContentSection/ContentSection";
import { CardsCarousel } from "../Carousel/Carousel";

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
        "We offer a comprehensive suite of web development services tailored to elevate your online presence. Our expert development team crafts custom websites that blend aesthetics with functionality, ensuring a seamless user experience. Specializing in e-commerce solutions, we help businesses create robust online stores that drive sales and customer engagement. Our SEO services are designed to boost your website's visibility, helping you rank higher on search engines and attract organic traffic. Additionally, we optimize your site for speed, performance, and mobile compatibility, ensuring it runs smoothly across all devices. Partner with Phoenix Studio 01 to transform your digital footprint and achieve your business goals."
      }
    >
      <CardsCarousel items={blogs} />
    </ContentSection>
  );
}
