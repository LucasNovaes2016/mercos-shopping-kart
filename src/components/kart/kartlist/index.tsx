import React from "react";
import { useSelector, useDispatch } from "react-redux";
import KartListItem from "./kartlistitem";

export interface IKartList {
  lista_produtos: any;
}

export default function KartList({ lista_produtos }: IKartList) {
  const [listaProdutosFormatados, setListaProdutosFormatados] = React.useState<
    any
  >([]);

  const produtos_carrinho = useSelector(
    (state: any) => state.shopping_kart_reducer.produtos_carrinho
  );

  const formatarProduto = (produto_carrinho: any) => {
    const produto = lista_produtos.find(
      (produto: any) => produto.id === produto_carrinho.id
    );
    return {
      ...produto,
      observacao: produto_carrinho.observacao,
      quantidade_escolhida: produto_carrinho.quantidade_escolhida,
    };
  };

  React.useEffect(() => {
    setListaProdutosFormatados(
      produtos_carrinho.map((produto_carrinho: any) =>
        formatarProduto(produto_carrinho)
      )
    );
  }, [produtos_carrinho]);

  return (
    <>
      {listaProdutosFormatados.length ? (
        listaProdutosFormatados.map((produto_formatado: any) => (
          <KartListItem
            key={produto_formatado.id}
            produto_formatado={produto_formatado}
          />
        ))
      ) : (
        <p className="lead">Carregando Produtos...</p>
      )}
    </>
  );
}
