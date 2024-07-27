import { createTheme, Button } from "@mantine/core";

export const theme = createTheme({
  defaultGradient: { from: "#62cff4", to: "#2c67f2" },
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
