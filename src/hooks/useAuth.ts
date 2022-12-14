/**
 * Mock auth hook. This is not real implementation of auth
 * @param login - login string
 * @param password - password string
 */
import { useState } from "react";

interface UserData {
  id: string;
  password: string;
  cookie: string;
}

export const useMockAuth = ():[
  result: "success"|"loading"|"error"|"idle",
  auth: (login: string, password: string) => void
] => {

  const [result, setResult] = useState<"success"|"loading"|"error"|"idle">("idle");

  const auth = (login: string, password: string) => {
    setResult("loading");

    fetch(`https://my-json-server.typicode.com/blinikar/takeoff-staff-test-task/users/${login}`)
      .then((res) => res.text())
      .then((res) => JSON.parse(res) as UserData)
      .then((res) => {
        console.log(res);
        if (res.password === password) {
          document.cookie = `bearer-token=${res.cookie}`
          setResult("success");
        } else {
          setResult("error");
        }
      })
      .catch(() => {
        setResult("error");
      })
  }

  return [result, auth];
}
