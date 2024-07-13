import classes from "./GText.module.css";

export default function GText({ text }) {
  return <span className={classes.gradient}>{text}</span>;
}
