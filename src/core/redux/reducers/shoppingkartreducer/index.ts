import {
  ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO,
  ALTERAR_QUANTIDADE_PRODUTO_CARRINHO,
  REMOVER_PRODUTO_CARRINHO,
  SETAR_PRODUTOS_CARRINHO,
  SETAR_TEXTO_PESQUISADO,
  RESETAR_ESTADO_GLOBAL,
} from "../../types";

import { IApplicationState } from "../../../interfaces/index";

const initialState: IApplicationState = {
  produtos_carrinho: [],
  texto_pesquisado: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ALTERAR_QUANTIDADE_PRODUTO_CARRINHO:
      return {
        ...state,
        produtos_carrinho: state.produtos_carrinho.map((produto: any) => {
          if (produto.id === action.payload.id) {
            return {
              ...produto,
              quantidade_escolhida: action.payload.quantidade_escolhida,
            };
          } else return { ...produto };
        }),
      };
    case ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO:
      return {
        ...state,
        produtos_carrinho: state.produtos_carrinho.map((produto: any) => {
          if (produto.id === action.payload.id) {
            return {
              ...produto,
              observacao: action.payload.observacao,
            };
          } else return { ...produto };
        }),
      };
    case REMOVER_PRODUTO_CARRINHO:
      return {
        ...state,
        produtos_carrinho: state.produtos_carrinho.filter(
          (produto: any) => produto.id !== action.payload
        ),
      };
    case SETAR_PRODUTOS_CARRINHO:
      return {
        ...state,
        produtos_carrinho: action.payload,
      };
    case SETAR_TEXTO_PESQUISADO:
      return {
        ...state,
        texto_pesquisado: action.payload,
      };
    case RESETAR_ESTADO_GLOBAL:
      return {
        ...state,
        texto_pesquisado: "",
        produtos_carrinho: state.produtos_carrinho.map(
          (produto_carrinho: any) => {
            return {
              ...produto_carrinho,
              quantidade_escolhida: 0,
            };
          }
        ),
      };
    default:
      return state;
  }
};
