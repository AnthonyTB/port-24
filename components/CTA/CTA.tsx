import classes from "./CTA.module.css";
import { useHover } from "@mantine/hooks";
import { motion } from "framer-motion";

interface IProps {
  label: string;
  action: () => void;
}

export function CTA({ label, action = () => {} }: IProps) {
  const { hovered, ref } = useHover();

  return (
    <motion.div className={classes.container}>
      <motion.button
        ref={ref as any}
        onClick={() => action}
        className={classes.cta}
      >
        <span style={{ position: "relative", zIndex: 20 }}>{label}</span>
        <motion.div
          initial={{ width: "0%" }}
          animate={hovered ? { width: "100%" } : {}}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
          className={classes.overlay}
        />
        <div className={classes.corner_1}></div>
        <div className={classes.corner_2}></div>
        <div className={classes.corner_3}></div>
        <div className={classes.corner_4}></div>
      </motion.button>
    </motion.div>
  );
}
