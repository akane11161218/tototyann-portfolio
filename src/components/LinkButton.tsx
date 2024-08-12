import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton = ({ to, children }: LinkButtonProps) => (
  <Link to={to} style={{ zIndex: 100 }}>
    <button className={styles["button-style"]}>{children}</button>
  </Link>
);

export default LinkButton;
