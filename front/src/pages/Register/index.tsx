import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Link, useNavigate } from "react-router-dom";
import { Container, ContainerForm } from "../../styles/form";
import { HeaderContainers } from "../../styles/form";
import { UserContext } from "../../contexts/UserContext";
import { FormContainer, Form, Input, Footer } from "../../styles/modalForm";

export interface iRegisterFormData {
  email: string;
  password: string;
  fullName: string;
  telephone: number;
}

const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const submit = async (data: iRegisterFormData) => {
    userRegister(data, setLoading);
  };

  const mudarPag = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Container>
      <ContainerForm>
        <HeaderContainers>
          <h1>My contacts</h1>

          <Link onClick={mudarPag} to={""}>
            Voltar
          </Link>
        </HeaderContainers>
        <FormContainer onSubmit={handleSubmit(submit)}>
          <Form>
            <Input>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </Input>
            <Input>
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Input>
            <Input>
              <label htmlFor="fullName">Nome</label>
              <input
                id="fullName"
                type="text"
                placeholder="fullName"
                {...register("fullName")}
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
            </Input>
            <Input>
              <label htmlFor="telephone">Telephone</label>
              <input
                id="telephone"
                type="integer"
                placeholder="telephone"
                {...register("telephone")}
              />
              {errors.telephone && <p>{errors.telephone.message}</p>}
            </Input>

            <Footer>
              <button type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastre-se"}
              </button>
            </Footer>
          </Form>
        </FormContainer>
      </ContainerForm>
    </Container>
  );
};

export default RegisterPage;
