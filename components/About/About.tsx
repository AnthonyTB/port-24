import {
  Title,
  Text,
  Container,
  Image,
  Grid,
  useMantineTheme,
  Tabs,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./About.module.css";
import { motion } from "framer-motion";
import Headshot from "../../public/assets/images/Headshot.png";

export function About() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const tabs = [
    {
      heading: "MY STORY",
      text: [
        "Born and raised in Indiana,I specialize in Development, E-commerce, SEO, and Optimization. My journey into web development began in high school, followed by college and graduation from a renowned coding bootcamp. This unique blend of education and hands-on experience ensures each project not only meets but exceeds client expectations.",
        "I am dedicated to helping businesses transform and thrive in the digital landscape. With a collaborative approach and focus on innovation, I continually push the boundaries of web development. This commitment makes me a trusted partner for clients looking to elevate their online presence.",
      ],
    },
    {
      heading: "EXPERIENCE",
      text: [
        "Currently, I lead projects at Quest Hunt Co., specializing in developing their custom platform using NuxtJS and NodeJS. My professional journey includes key roles at Frontier Media Labs, where I led client projects with VueJS, ReactJS, and NodeJS, and at Fall Guys Consulting, where I improved QA processes and enhanced client site performance. Additionally, as a mentor at Code Ninjas, I taught programming to young learners, showcasing my commitment to sharing knowledge and fostering new talent in the tech community. My dedication to continuous learning and innovation makes me a trusted partner for clients seeking to elevate their online presence.",
      ],
    },
  ];

  return (
    <Container mt={100} className={classes.wrapper} size={1400}>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
      >
        <div className={classes.inner}>
          <Title ff={"Horizon Outlined"} className={classes.title}>
            LEARN{" "}
            <Text
              component="span"
              variant="gradient"
              ff={"Horizon"}
              className={classes.highlight}
              inherit
            >
              ABOUT
            </Text>{" "}
            ME
          </Title>

          <Container mt={100} p={0} className={classes.about}>
            <div className={classes.corner_1}></div>
            <div className={classes.corner_2}></div>
            <div className={classes.corner_3}></div>
            <div className={classes.corner_4}></div>
            <Grid align="center" gutter={80}>
              <Grid.Col order={!mobile ? 1 : 0} span={{ base: 12, md: 4 }}>
                <Image src={Headshot.src} />
              </Grid.Col>
              <Grid.Col
                style={{ alignSelf: "start" }}
                order={!mobile ? 1 : 0}
                span={{ base: 12, md: 8 }}
              >
                <Tabs defaultValue="my story">
                  <Tabs.List grow>
                    {tabs.map((tab) => (
                      <Tabs.Tab
                        key={`${tab.heading.toLowerCase()} tab`}
                        ff={"Horizon"}
                        value={tab.heading.toLowerCase()}
                      >
                        {tab.heading}
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>

                  {tabs.map((tab) => (
                    <Tabs.Panel
                      key={`${tab.heading.toLowerCase()} content`}
                      mt={25}
                      value={tab.heading.toLowerCase()}
                    >
                      {tab.text.map((p) => (
                        <Text my={15} component="p">
                          {p}
                        </Text>
                      ))}
                    </Tabs.Panel>
                  ))}
                </Tabs>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
      </motion.div>
    </Container>
  );
}
