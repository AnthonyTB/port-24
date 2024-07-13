import { createTheme, Button } from "@mantine/core";

export const theme = createTheme({
  defaultGradient: { from: "#00ffff", to: "#9600ff" },
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
