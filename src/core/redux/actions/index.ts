import {
  ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO,
  ALTERAR_QUANTIDADE_PRODUTO_CARRINHO,
  REMOVER_PRODUTO_CARRINHO,
  SETAR_PRODUTOS_CARRINHO,
  SETAR_TEXTO_PESQUISADO,
} from "../types";

// Adicionar Observacao...
export const adicionarObservacaoProdutoCarrinho = (
  observacao_e_produto: any
) => {
  return {
    type: ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO,
    payload: observacao_e_produto,
  };
};

// Alterar quantidade do produto
export const alterarQuantidadeProdutoCarrinho = (quantidade_e_produto: any) => {
  return {
    type: ALTERAR_QUANTIDADE_PRODUTO_CARRINHO,
    payload: quantidade_e_produto,
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

// Setar texto pesquisado
export const setarTextoPesquisado = (texto_pesquisado: string) => {
  return {
    type: SETAR_TEXTO_PESQUISADO,
    payload: texto_pesquisado,
  };
};
