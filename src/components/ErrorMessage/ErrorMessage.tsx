import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps): JSX.Element {
  return (
    <p className={styles.text}>
      ❌ {message ?? "There was an error, please try again..."}
    </p>
  );
}
