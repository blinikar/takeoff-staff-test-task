import { FormEvent, useEffect, useState } from "react";
import { useMockAuth } from "hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const useLoginPageLogic = () => {
  return {
    useLoginForm: ():[
      login: string,
      password: string,
      error: string,
      getHandleInput: (field: "login" | "password") => (event: FormEvent<HTMLInputElement>) => void,
      handleSubmit: (login: string, password: string) => void
    ] => {
      const [login, setLogin] = useState<string>("");
      const [password, setPassword] = useState<string>("");
      const [error, setError] = useState<string>("");

      const [authStatus, proceedAuth] = useMockAuth();
      const navigate = useNavigate();

      useEffect(() => {
        switch (authStatus) {
          case "error":
            setError("Login failed");
            break;
          case "loading":
            setError("");
            break;
          case "success":
            navigate("/");
            break;
          case "idle":
            setError("");
            break;
        }
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
        error,
        getHandleInput,
        handleSubmit
      ]
    },
    useResetCookie: () => {
      useEffect(() => {
        document.cookie = `bearer-token=`;
      }, [])
    }
  }
}
