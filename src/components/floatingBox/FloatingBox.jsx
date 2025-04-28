import { useEffect, useState } from "react";
import styles from "./FloatingBox.module.css";

export default function FloatingBox({ children }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        transform: `perspective(1800px) translate(-50%, -50%) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className={styles.floatingBox}
    >
      {children}
    </div>
  );
}
