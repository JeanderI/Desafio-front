import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginFormData } from "../pages/Login";
import { iRegisterFormData } from "../pages/Register";
import { api } from "../services/api";
import React from "react";
export const UserContext = createContext({} as iUserContext);

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface iListTech {
  title: string;
  status: string;
  id: string;
}

interface iUserContext {
  user: iUser | null;
  currentRoute: string | null;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
  userLogin: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userRegister: (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  listTech: iListTech[];
  setListTech: React.Dispatch<React.SetStateAction<iListTech[]>>;
}

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [listTech, setListTech] = useState([] as iListTech[]);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@KenzieHub:");

      if (token) {
        try {
          const response = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
          setListTech(response.data.techs);
        } catch (error) {
          localStorage.removeItem("@kenzieHub:");
          navigate("/");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const userLogin = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      setUser(response.data.user);

      localStorage.setItem("@KenzieHub:", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post("users", data);
      console.log(response);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error);

      setTimeout(() => {}, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        currentRoute,
        setCurrentRoute,
        listTech,
        setListTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
