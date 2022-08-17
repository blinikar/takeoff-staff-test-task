import React  from "react";
import styles from "./Contacts.module.scss";
import { useContactsPageLogic } from "./Contacts.logic";
import { Contact } from "components/Contact";
import { TextField } from "components/TextField";

export const ContactsPage:React.FunctionComponent = () => {
  const logic = useContactsPageLogic();
  logic.useRedirect();

  return <>
    <div className={styles["contacts-page-bg"]}></div>
    <div className={styles["contacts-page"]}>
      <h1>Contactio</h1>
      <TextField placeholder={"Search for contacts..."} />

      <Contact />

    </div>
  </>
}
