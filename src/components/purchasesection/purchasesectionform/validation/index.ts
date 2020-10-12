import * as yup from "yup";

export const dadosVendaSchema = yup.object().shape({
  rua: yup
    .string()
    .min(1, "Rua é um campo obrigatório.")
    .required("Rua é um campo obrigatório."),
  bairro: yup
    .string()
    .min(1, "Rua é um campo obrigatório.")
    .required("Bairro é um campo obrigatório."),
  numero: yup
    .string()
    .min(1, "Rua é um campo obrigatório.")
    .required("Número é um campo obrigatório."),
  cvc: yup
    .string()
    .length(3, "O CVC deve conter exatamente 3 caracteres.")
    .required("CVC é um campo obrigatório."),
  numero_cartao: yup
    .string()
    .length(16, "O Número do Cartão deve conter exatamente 16 caracteres.")
    .required("O Número do Cartão é um campo obrigatório."),
});
