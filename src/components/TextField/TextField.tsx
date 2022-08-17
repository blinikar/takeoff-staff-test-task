import React from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps {
  customWidth?: string;
}

export const TextField:React.FunctionComponent<TextFieldProps & React.HTMLProps<HTMLInputElement>> = (props) => {
  return <input
    {...props}
    style={{
      "width": props.customWidth
    }}
    className={styles["text-field"]}
  />
}
