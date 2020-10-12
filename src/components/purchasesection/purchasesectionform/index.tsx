import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dadosVendaSchema } from "./validation";
import { Formik, FormikBag, FormikValues } from "formik";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import axios from "axios";
import { RESETAR_ESTADO_GLOBAL } from "../../../core/redux/types";

export interface IPurchaseSectionForm {
  lista_produtos: any;
}

export default function PurchaseSectionForm({
  lista_produtos,
}: IPurchaseSectionForm) {
  const dispatch = useDispatch();
  const history = useHistory();

  const produtos_carrinho = useSelector(
    (state: any) => state.shopping_kart_reducer.produtos_carrinho
  );

  const onComprar = (values: FormikValues, bag: any) => {
    const produtos_carrinho_formatado: any = [];

    produtos_carrinho.forEach((produto_carrinho: any) => {
      produto_carrinho.quantidade = produto_carrinho.quantidade_escolhida;
      delete produto_carrinho["quantidade_escolhida"];
      produtos_carrinho_formatado.push(produto_carrinho);
    });

    console.log("produtos carrinho formatado = ", produtos_carrinho_formatado);

    const req = {
      itens: produtos_carrinho_formatado,
      endereco: {
        rua: values.rua,
        bairro: values.bairro,
        numero: values.numero,
      },
      cartao: {
        numero: values.numero,
        cvc: values.cvc,
      },
    };

    axios
      .post(
        "https://5f2c373bffc88500167b8cce.mockapi.io/carrinho",
        JSON.stringify(req)
      )
      .then((res: any) => {
        bag.setSubmitting(false);
        toast.success("Produtos comprados com sucesso.");
        dispatch({
          type: RESETAR_ESTADO_GLOBAL,
        });

        history.push("/");
      })
      .catch((err: any) => {
        bag.setSubmitting(false);
        toast.error("Erro ao salvar os produtos");
      });
  };

  return (
    <div className="purchase-section-form">
      <Formik
        initialValues={{
          rua: "",
          bairro: "",
          numero: "",
          cvc: "",
          numero_cartao: "",
        }}
        validationSchema={dadosVendaSchema}
        onSubmit={onComprar}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-row">
                <div className="col-lg-5 py-1">
                  <label htmlFor="exampleInputRua">Rua</label>
                  <input
                    className="form-control"
                    type="text"
                    name="rua"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rua}
                  />
                  <div className="invalid-feedback">
                    {touched.rua && errors.rua}
                  </div>
                </div>

                <div className="col-lg-5 py-1">
                  <label htmlFor="exampleInputBairro">Bairro</label>
                  <input
                    className="form-control"
                    type="text"
                    name="bairro"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bairro}
                  />
                  <div className="invalid-feedback">
                    {touched.bairro && errors.bairro}
                  </div>
                </div>
                <div className="col-lg-2 py-1">
                  <label htmlFor="exmapleInputNumero">Número</label>
                  <input
                    className="form-control"
                    type="text"
                    name="numero"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numero}
                  />
                  <div className="invalid-feedback">
                    {touched.numero && errors.numero}
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-2 py-1">
                  <label htmlFor="exampleInputCVC">CVC</label>
                  <input
                    className="form-control"
                    type="text"
                    name="cvc"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvc}
                  />
                  <div className="invalid-feedback">
                    {touched.cvc && errors.cvc}
                  </div>
                </div>
                <div className="col-lg-4 py-1">
                  <label htmlFor="exampleInputCartao">Número Cartão</label>
                  <input
                    className="form-control"
                    type="text"
                    name="numero_cartao"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numero_cartao}
                  />
                  <div className="invalid-feedback">
                    {touched.numero_cartao && errors.numero_cartao}
                  </div>
                </div>
                <div className="col-lg-3">
                  <button
                    className="btn bg-info text-white btn-block rounded-0"
                    type="button"
                    style={{ marginTop: "35px" }}
                    onClick={() => {
                      history.push("/");
                      dispatch({
                        type: RESETAR_ESTADO_GLOBAL,
                      });
                    }}
                  >
                    Esvaziar Carrinho
                  </button>
                </div>
                <div className="col-lg-3">
                  <button
                    className="btn primary-background btn-block text-white rounded-0"
                    type="submit"
                    style={{ marginTop: "35px" }}
                    disabled={isSubmitting}
                    onClick={() => {
                      if (isEmpty(touched) || !isEmpty(errors)) {
                        toast.error(
                          "Existem erros no formulário. Por favor, verifique-os."
                        );
                      }
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
