import React from "react";
import styles from "./Contact.module.scss";

interface ContactProps {
  name: string;
  body: string;
}

export const Contact:React.FunctionComponent<ContactProps> = (props) => {
  return <div className={styles["contact"]}>
    <p>
      Yegor Blinov | +791144232337
    </p>
    <div className={styles["buttons-container"]}>
      <button><span className={"material-symbols-outlined"}>edit</span></button>
      <button><span className={"material-symbols-outlined"}>delete</span></button>
    </div>
  </div>
}
