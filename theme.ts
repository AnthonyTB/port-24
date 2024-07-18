import { createTheme, Button } from "@mantine/core";

export const theme = createTheme({
  defaultGradient: { from: "#F7FF01", to: "#C6FF00" },
  fontFamily: "Orbitron, mono-space",
  components: {
    Button: Button.extend({
      defaultProps: {
        ff: "Horizon, monospace",
        tt: "uppercase",
      },
    }),
  },
});
