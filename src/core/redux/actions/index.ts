import {
  ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO,
  ALTERAR_QUANTIDADE_PRODUTO_CARRINHO,
  REMOVER_PRODUTO_CARRINHO,
  SETAR_PRODUTOS_CARRINHO,
} from "../types";

// Adicionar Observacao...
export const adicionarObservacaoProdutoCarrinho = (
  id: number,
  observacao: string
) => {
  return {
    type: ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO,
    payload: { id, observacao },
  };
};

// Alterar quantidade do produto
export const alterarQuantidadeProdutoCarrinho = (
  id: number,
  quantidade: number
) => {
  return {
    type: ALTERAR_QUANTIDADE_PRODUTO_CARRINHO,
    payload: { id, quantidade },
  };
};

// Remover produto...
export const removerProdutoCarrinho = (id: number) => {
  return {
    type: REMOVER_PRODUTO_CARRINHO,
    payload: id,
  };
};

// Setar produtos do carrinho
export const setarProdutosCarrinho = (produtos: any) => {
  return {
    type: SETAR_PRODUTOS_CARRINHO,
    payload: produtos,
  };
};
