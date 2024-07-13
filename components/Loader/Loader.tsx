import {
  Loader,
  Transition,
  Title,
  Text,
  Container,
  Flex,
} from "@mantine/core";
import { useEffect, useState } from "react";

export default function LoaderOverlay() {
  const [loaded, setLoaded] = useState(true);

  return (
    <Transition
      mounted={loaded}
      transition={"slide-right"}
      timingFunction="ease"
    >
      {(transitionStyle) => (
        <Container style={transitionStyle} h={"100vh"}>
          <Flex direction={"column"}>
            <Title ta={"center"} c={"white"} fz={60} mb={"sm"} fw={900}>
              phoenix
              <Text fz={120} variant="gradient" ff={"Roboto"} component="span">
                .
              </Text>
            </Title>
            <Loader size={"xl"} mx={"auto"} color="#9600ff" type="dots" />
          </Flex>
        </Container>
      )}
    </Transition>
  );
}
