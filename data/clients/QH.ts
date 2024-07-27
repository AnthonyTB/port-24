import { Client } from "../type";
import Quest from "../../public/assets/images/quest.jpg";

export const QH: Client = {
  name: "Quest Hunt Co.",
  slug: "quest-hunt-co",
  short:
    "Quest Hunt Co. hosts a premier hunting tournament where teams compete for the chance to win significant prizes and recognition. The tournament spans various regions and focuses on hunting activities, offering participants an engaging and competitive environment. ",
  categories: ["Development", "SEO", "UI/UX Improvement"],
  image: Quest.src,
  meta: "",
  created_at: "11/15/2022",
  stats: [
    {
      title: "Leaderboard Render Time",
      description:
        "The biggest one concern for the client was their prior leaderboard page render time was very cumbersome. I was able to greatly reduce the render time by paginated the leaderboard data and serving compressed/cached images.",
      value: "-2.27s",
    },
    {
      title: "User Retention",
      description:
        "The client's prior user retention wasn't the greatest year to year. After the first year of the new platform I managed to increase their user rentention by 35%.",
      value: "+35%",
    },
    {
      title: "Registration",
      description:
        "With the new registration process and UI/UX implementations I was able to increase their user registration by 11% from the prior year.",
      value: "+11%",
    },
  ],
  content: {
    evaluation: [
      { type: "h", content: { text: "Evaluating the Current Platform" } },
      {
        type: "p",
        content: {
          text: "When the client approached me, they were struggling with an outdated website that suffered from poor performance and a subpar user experience (UX). My first step was to conduct a comprehensive audit of their existing platform. I identified several critical areas for improvement:",
        },
      },
      {
        type: "ul",
        content: [
          {
            bold: "Site Performance",
            text: "The website was slow to load, leading to frustrated visitors which generated unnecassary support requests.",
          },
          {
            bold: "User Interface (UI)",
            text: "The design was cluttered and not user-friendly, making navigation difficult.",
          },
          {
            bold: "User Experience (UX)",
            text: "The overall experience was not intuitive, resulting in a lower conversion rate and also leaving existing users wondering how to complete necessary tasks within the platform.",
          },
        ],
      },
      { type: "h", content: { text: "Designing the New Site" } },
      {
        type: "p",
        content: {
          text: "Armed with this knowledge, I set out to design a new website that would address these issues and provide a seamless experience for users. I worked closely with the client to understand their brand, goals, and target audience. This collaborative approach ensured that the final design was not only aesthetically pleasing but also functional and aligned with the client's vision.",
        },
      },
      { type: "p", content: { text: "Key design elements included:" } },
      {
        type: "ul",
        content: [
          {
            bold: "Clean and Modern UI",
            text: "I opted for a minimalist design to improve navigation and highlight key content.",
          },
          {
            bold: "Responsive Design",
            text: "Ensuring the site looked and performed well on all devices was a top priority.",
          },
          {
            bold: "Improved UX",
            text: "I streamlined the user journey to make it easier for visitors to find what they were looking for and take desired actions.",
          },
        ],
      },
      { type: "h", content: { text: "Choosing the Tech Stack" } },
      {
        type: "p",
        content: {
          text: "To bring the design to life, I carefully selected a tech stack that would provide the best performance and scalability. The chosen technologies were:",
        },
      },
      {
        type: "ul",
        content: [
          {
            bold: "Frontend",
            text: "I used NuxtJS for its powerful features and ease of use in building high-performance, SEO-friendly web applications. NuxtJS also provided a great developer experience, allowing me to build and iterate quickly.",
          },
          {
            bold: "Backend",
            text: "AdonisJS was my framework of choice for the backend. Its robust structure and simplicity made it perfect for building scalable server-side applications. AdonisJS also integrates well with other parts of the tech stack.",
          },
          {
            bold: "Payment Processing",
            text: "For handling payments, I integrated the Square SDK. This choice was based on its comprehensive features, security, and ease of integration, ensuring a smooth and secure payment experience for users.",
          },
          {
            bold: "Database",
            text: "I selected MySQL for our database needs due to its reliability, performance, and familiarity. MySQL's robust capabilities allowed me to efficiently manage the client's data and ensure quick access times.",
          },
        ],
      },
    ],
    implementation: [
      {
        type: "h",
        content: {
          text: "Designed Database and Structured Table Relationships",
        },
      },
      {
        type: "p",
        content: {
          text: "I meticulously designed the database schema, ensuring that table relationships were well-structured for optimal performance and scalability. This foundational work was crucial for efficient data management.",
        },
      },
      { type: "h", content: { text: "Created All Necessary Endpoints" } },
      {
        type: "p",
        content: {
          text: "Using AdonisJS, I developed all the required API endpoints to handle the various functionalities of the site. This included user authentication, data retrieval, and payment processing, ensuring seamless communication between the frontend and backend.",
        },
      },
      { type: "h", content: { text: "Created the Frontend Client" } },
      {
        type: "p",
        content: {
          text: "I built the user interface with NuxtJS, focusing on responsiveness and performance. The design was implemented with attention to detail, ensuring a consistent and engaging user experience across all devices.",
        },
      },
      { type: "h", content: { text: "Conducted A/B Testing" } },
      {
        type: "p",
        content: {
          text: "To optimize the user experience further, I conducted A/B testing on key pages and features. This allowed me to make data-driven decisions and refine the site based on user behavior and feedback.",
        },
      },
      { type: "h", content: { text: "Performed SEO Optimization" } },
      {
        type: "p",
        content: {
          text: "Finally, I implemented SEO best practices to enhance the site's visibility on search engines. This included optimizing meta tags, improving site speed, and ensuring that the content was easily crawlable by search engines.",
        },
      },
    ],
    conclusion: [
      { type: "h", content: { text: "Launch and Results" } },
      {
        type: "p",
        content: {
          text: "In conclusion, the transformation of my client's website was a testament to the power of careful planning, collaborative design, and the right technology choices. I pride myself on delivering high-quality solutions that meet my clients' needs and exceed their expectations. This project is a shining example of my commitment to excellence in web development.",
        },
      },
    ],
  },
};
