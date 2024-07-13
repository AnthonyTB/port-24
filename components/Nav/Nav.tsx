import { useState, useEffect } from "react";
import { Container, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Nav.module.css";
import { useRouter, usePathname } from "next/navigation";

const links = [{ link: "/our-work", label: "Our Work", type: "page" }];

export function Nav() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState("");
  const location = usePathname();
  const router = useRouter();

  useEffect(() => {
    setActive("");
    links.forEach((link) => {
      console.log(location, link.link);
      if (location === link.link) {
        setActive(link.link);
      }
    });
  }, [location]);

  const genItems = () => {
    return links.map((link) => (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={(ev) => {
          ev.preventDefault();
          if (link.type === "section") {
            if (location !== "/") {
              router.push("/");
              setTimeout(() => {
                document
                  .getElementById(link.link)
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 500);
            } else {
              setTimeout(() => {
                document
                  .getElementById(link.link)
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 500);
            }
          } else {
            router.push(link.link);
          }
        }}
      >
        {link.label}
      </a>
    ));
  };

  return (
    <>
      <header className={classes.header}>
        <Container size="xs" className={classes.inner}>
          <Group justify="end" gap={5}>
            {genItems()}
          </Group>
        </Container>
      </header>
    </>
  );
}
