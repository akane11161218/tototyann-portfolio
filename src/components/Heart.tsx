import { useState, useEffect } from "react";
import styles from "./Heart.module.css";

interface HeartProps {
  top: number;
  left: number;
}

const Heart = ({ top, left }: HeartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);

      return () => clearTimeout(hideTimer);
    }
  }, [isInitialized]);

  return (
    <div
      className={`
        ${styles.heart} 
        ${isInitialized ? styles.initialized : ""} 
        ${isVisible ? styles.visible : ""}
      `}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    ></div>
  );
};

export default Heart;
