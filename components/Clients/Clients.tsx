import { ContentSection } from "../ContentSection/ContentSection";
import { CardsCarousel } from "../Carousel/Carousel";

const clients = [
  {
    image: "https://www.1838.bar/_next/static/media/HeroImg.05122abd.jpg",
    title: "1838 Bourbon & Wine Bar",
    category: "Website Design & SEO",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Gulf Coast Guardians",
    category: "Website Design & SEO",
  },
  {
    image:
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/415942687_721761553432034_2809138020556936425_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2ikA1ZbSRa4Q7kNvgFT-8UV&_nc_ht=scontent-ord5-1.xx&oh=00_AYBHjq9LBXfsyS0yZhkBSKNpx4WnYHBrMzDCHyQTQJsDAA&oe=6695E9B1",
    title: "Quest Hunt Co.",
    category: "Website Design & SEO",
  },
];

export function Clients() {
  return (
    <ContentSection
      heading="CLIENTS"
      flip={true}
      description="We offer a comprehensive suite of web development services tailored
            to elevate your online presence. Our expert development team crafts
            custom websites that blend aesthetics with functionality, ensuring a
            seamless user experience. Specializing in e-commerce solutions, we
            help businesses create robust online stores that drive sales and
            customer engagement. Our SEO services are designed to boost your
            website's visibility, helping you rank higher on search engines and
            attract organic traffic. Additionally, we optimize your site for
            speed, performance, and mobile compatibility, ensuring it runs
            smoothly across all devices. Partner with Phoenix Studio 01 to
            transform your digital footprint and achieve your business goals."
    >
      <CardsCarousel items={clients} />
    </ContentSection>
  );
}
