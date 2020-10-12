import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dadosVendaSchema } from "./validation";
import { Formik } from "formik";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

export interface IPurchaseSectionForm {
  lista_produtos: any;
}

export default function PurchaseSectionForm({
  lista_produtos,
}: IPurchaseSectionForm) {
  const history = useHistory();

  const produtos_carrinho = useSelector(
    (state: any) => state.shopping_kart_reducer.produtos_carrinho
  );

  // const handleChangeFinalizarCompra = () => {
  //   history.push("/");
  // };

  const onComprar = () => {
    console.log(
      "Comprar os itens do carrinho, resetar logica e mandar de volta pra tela inicial"
    );
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
                <div className="col-lg-6">
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
