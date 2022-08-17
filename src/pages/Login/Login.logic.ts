import { FormEvent, useState } from "react";

export const useLoginPageLogic = () => {
  return {
    useLoginForm: ():[
      login: string,
      password: string,
      getHandleInput: (field: "login" | "password") => (event: FormEvent<HTMLInputElement>) => void,
      handleSubmit: (login: string, password: string) => void
    ] => {
      const [login, setLogin] = useState<string>("");
      const [password, setPassword] = useState<string>("");

      const getHandleInput = (field: "login" | "password") => {

        let setter: (state: string) => void;
        switch (field) {
          case "login":
            setter = setLogin;
            break;
          case "password":
            setter = setPassword;
            break;
        }

        return (event: FormEvent<HTMLInputElement>) => {
          setter(event.currentTarget.value);
        }
      }

      const handleSubmit = (login: string, password: string) => {
        document.cookie = "bearer-token=hello"
      }

      return [
        login,
        password,
        getHandleInput,
        handleSubmit
      ]
    }
  }
}
