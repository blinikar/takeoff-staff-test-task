import React from "react";
import styles from "./Login.module.scss";
import { useLoginPageLogic } from "./Login.logic";

export const LoginPage:React.FunctionComponent = () => {
  const logic = useLoginPageLogic();

  const [login, password, getHandleInput, handleSubmit] = logic.useLoginForm();

  return <>
    <div className={styles["login-bg"]}></div>
    <div className={styles["login-card"]}>
      <form
        className={styles["login-elements"]}
        onSubmit={() => {
          handleSubmit(login, password);
        }}
      >
        <h1>Contactio</h1>

        <input
          id={"login"}
          placeholder={"Login"}
          value={login}
          onInput={getHandleInput("login")}/>
        <input
          id={"password"}
          placeholder={"Password"}
          type={"password"}
          value={password}
          onInput={getHandleInput("password")}/>

        <button>Login</button>
      </form>
    </div>
  </>
}
