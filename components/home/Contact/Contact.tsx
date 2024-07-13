import { Container } from "@mantine/core";
import { CenterSection } from "../../core/CenterSection/CenterSection";
import { Widget } from "@typeform/embed-react";

export function Contact() {
  return (
    <CenterSection heading={{ first_half: "contact", highlight: "me" }}>
      <Container h={550}>
        <Widget inlineOnMobile id="clyInQaU" style={{ height: "100%" }} />
      </Container>
    </CenterSection>
  );
}
