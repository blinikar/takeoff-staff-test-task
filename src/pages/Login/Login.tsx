import React from "react";
import styles from "./Login.module.scss";
import { useLoginPageLogic } from "./Login.logic";
import { TextField } from "components/TextField";

export const LoginPage:React.FunctionComponent = () => {
  const logic = useLoginPageLogic();
  logic.useResetCookie();

  const [login, password, error, getHandleInput, handleSubmit] = logic.useLoginForm();

  return <>
    <div className={styles["login-bg"]}></div>
    <div className={styles["login-card"]}>
      <form
        className={styles["login-elements"]}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(login, password);
        }}
      >
        <h1>Contactio</h1>

        <TextField
          id={"login"}
          placeholder={"Login"}
          value={login}
          onInput={getHandleInput("login")}
          customWidth={"70%"}/>
        <TextField
          id={"password"}
          placeholder={"Password"}
          type={"password"}
          value={password}
          onInput={getHandleInput("password")}
          customWidth={"70%"} />

        <button>Login</button>
        <p className={styles["error-message"]}>{error}</p>
      </form>
    </div>
  </>
}
