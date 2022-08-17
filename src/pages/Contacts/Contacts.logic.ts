import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCookie } from "utils";

export const useContactsPageLogic = () => {
  return {
    useRedirect: () => {
      const navigate = useNavigate();
      useEffect(() => {
        if (!getCookie("bearer-token")) navigate("/login");
      }, []);
    }
  }
}
