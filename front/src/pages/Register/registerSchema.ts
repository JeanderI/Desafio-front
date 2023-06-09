import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatorio").email("email invalido"),
  password: yup
    .string()
    .required("A senha é obrigatoria")
    .min(8, "min 8 caracters, usar regex"),
  fullName: yup.string().required("Nome é obrigatorio"),
  telephone: yup.number().required("O telefone é obrigatorio"),
});
