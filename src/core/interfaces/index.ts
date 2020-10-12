export interface IHeaderTop {
  numero: string;
  usuario: string;
  local: string;
}

export interface ISalesInfo {
  delivery_info: string;
  pagamento_info: string;
  desconto_info: string;
}

export interface IApplicationState {
  produtos_carrinho: any;
  texto_pesquisado: string;
}
