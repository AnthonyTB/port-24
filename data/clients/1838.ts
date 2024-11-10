import { Client } from "../type";
export const Eighteen: Client = {
  name: "1838 Bourbon & Wine Bar",
  slug: "1838-bourbon-wine-bar",
  categories: ["Development", "SEO"],
  image: "https://www.1838.bar/_next/static/media/HeroImg.d72a072e.webp",
  meta: "",
  short:
    "1838 Bourbon and Wine Bar brings a touch of elegance to the heart of downtown Rushville, IN. The bar features a broad selection of spirits, wine, and cigars, which patrons are welcome to indulge in while relaxing in the bar’s walk-in humidor cigar lounge.",
  created_at: "06/05/2024",
  content: {
    evaluation: [
      { type: "h", content: { text: "Introduction" } },
      {
        type: "p",
        content: {
          text: "1838 Bourbon & Wine Bar, an elegant establishment known for its extensive collection of fine spirits and wines, recently embarked on a journey to establish its online presence. The goal was to create a robust, user-friendly website that effectively showcases their offerings and enhances customer engagement. This case study outlines the process and technologies used to build their first website.",
        },
      },
      { type: "h", content: { text: "Initial Planning and Assessment" } },
      {
        type: "p",
        content: {
          text: "As this was the first website for 1838 Bourbon & Wine Bar, I started by understanding their needs and objectives:",
        },
      },
      {
        type: "ul",
        content: [
          {
            bold: "Brand Representation",
            text: "Ensuring the website reflects the sophisticated and inviting atmosphere of the bar.",
          },
          {
            bold: "User Experience",
            text: "Creating an intuitive and seamless navigation experience for visitors.",
          },
          {
            bold: "Content Management",
            text: "Providing an easy way to update content regularly, especially menus and event information.",
          },
        ],
      },
    ],
    implementation: [
      {
        type: "h",
        content: {
          text: "Designed CMS Structure",
        },
      },
      {
        type: "p",
        content: {
          text: "I selected Sanity.io for its flexibility and ease of use. I designed a schema that would allow 1838 Bourbon & Wine Bar to manage their content dynamically, including menus, events, and promotions.",
        },
      },

      { type: "h", content: { text: "Frontend Development" } },
      {
        type: "p",
        content: {
          text: "The design focused on a modern, clean aesthetic that matches the brand's sophistication. I implemented a responsive design to ensure the site looks great on all devices, from desktops to smartphones.",
        },
      },
      {
        type: "p",
        content: {
          text: "For the frontend, I chose Next.js due to its powerful features for server-side rendering and static site generation. This choice was crucial for performance and SEO, ensuring fast load times and better search engine visibility.",
        },
      },
      { type: "h", content: { text: "SEO Optimization" } },
      {
        type: "p",
        content: {
          text: "Leveraging Next.js’s server-side rendering capabilities, I ensured that all pages are easily crawlable by search engines.",
        },
      },
      {
        type: "p",
        content: {
          text: "I optimized all content for relevant keywords and structured the site to improve navigation and internal linking, enhancing both user experience and SEO performance.",
        },
      },
    ],
    conclusion: [
      { type: "h", content: { text: "The Launch" } },
      {
        type: "p",
        content: {
          text: "The launch of the 1838 Bourbon & Wine Bar website marks a significant step in their digital presence. The new website offers a user-friendly experience, fast performance, and improved SEO, helping to attract and engage customers. By using Next.js for the frontend and Sanity.io as the CMS, I created a flexible, high-performance site that will serve as a valuable asset for 1838 Bourbon & Wine Bar as they continue to grow.",
        },
      },
      {
        type: "p",
        content: {
          text: "This project highlights the importance of modern web technologies and thoughtful design in building an effective online presence, especially for businesses venturing into the digital space for the first time.",
        },
      },
    ],
  },
};
