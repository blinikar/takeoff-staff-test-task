import { FormEvent, useEffect, useState } from "react";
import { useMockAuth } from "hooks/useAuth";

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

      const [authStatus, proceedAuth] = useMockAuth();

      useEffect(() => {
        console.log(authStatus);
      }, [authStatus])

      const getHandleInput = (field: "login" | "password") => {
        switch (field) {
          case "login":
            return (event: FormEvent<HTMLInputElement>) => { setLogin(event.currentTarget.value) }
          case "password":
            return (event: FormEvent<HTMLInputElement>) => { setPassword(event.currentTarget.value) }
        }
      }

      const handleSubmit = (login: string, password: string) => {
        proceedAuth(login, password);
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
