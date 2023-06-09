import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ContainerForm, Container } from "../../styles/form";
import { FormContainer, Form, Input, Footer } from "../../styles/modalForm";
import { HeaderContainer } from "../../styles/form";
import { loginSchema } from "./loginSchema";

export interface iLoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const submit = async (data: iLoginFormData) => {
    userLogin(data, setLoading);
  };

  const mudarPag = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <Container>
      <ContainerForm>
        <HeaderContainer>
          <h1>My contacts</h1>
        </HeaderContainer>

        <FormContainer onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <Form>
            <Input>
              <label htmlFor="emailLogin">Email</label>
              <input
                id="emailLogin"
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </Input>
            <Input>
              <label htmlFor="senhaLogin">Senha</label>
              <input
                id="senhaLogin"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Input>
            <Footer>
              <button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
              <h4>Ainda não possui uma conta?</h4>
              <Link onClick={mudarPag} to={""}>
                Cadastre-se
              </Link>
            </Footer>
          </Form>
        </FormContainer>
      </ContainerForm>
    </Container>
  );
};

export default LoginPage;
