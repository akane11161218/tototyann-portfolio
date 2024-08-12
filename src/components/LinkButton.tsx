import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

const LinkButton = () => (
  <Link to="/oyatu">
    <button className={styles["button-style"]}>おすすめのおやつ</button>
  </Link>
);

export default LinkButton;
