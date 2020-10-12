import React from "react";
import { useSelector } from "react-redux";
import KartListItem from "./kartlistitem";

export interface IKartList {
  lista_produtos: any;
}

/* Componente para renderizar todos os itens no carrinho */

export default function KartList({ lista_produtos }: IKartList) {
  const [listaProdutosFormatados, setListaProdutosFormatados] = React.useState<
    any
  >([]);

  const produtos_carrinho = useSelector(
    (state: any) => state.shopping_kart_reducer.produtos_carrinho
  );

  const texto_pesquisado = useSelector(
    (state: any) => state.shopping_kart_reducer.texto_pesquisado
  );

  const filtrarProdutosCarrinho = (produto: any, texto_pesquisa: string) => {
    const texto_pesquisa_minuscula = texto_pesquisa.toLowerCase();

    return (
      produto.nome.toLowerCase().includes(texto_pesquisa_minuscula) ||
      produto.id.toString().includes(texto_pesquisa_minuscula) ||
      produto.observacao.toLowerCase().includes(texto_pesquisa_minuscula) ||
      produto.sku.toLowerCase().includes(texto_pesquisa_minuscula) ||
      produto.valor_unitario.toString().includes(texto_pesquisa_minuscula)
    );
  };

  React.useEffect(() => {
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

    setListaProdutosFormatados(
      produtos_carrinho.map((produto_carrinho: any) =>
        formatarProduto(produto_carrinho)
      )
    );
  }, [produtos_carrinho]);

  return (
    <>
      {texto_pesquisado.length ? (
        listaProdutosFormatados.filter((produto_formatado: string) =>
          filtrarProdutosCarrinho(produto_formatado, texto_pesquisado)
        ).length ? (
          listaProdutosFormatados
            .filter((produto_formatado: string) =>
              filtrarProdutosCarrinho(produto_formatado, texto_pesquisado)
            )
            .map((produto_encontrado: any) => (
              <KartListItem
                key={produto_encontrado.id}
                produto_formatado={produto_encontrado}
              />
            ))
        ) : (
          <p className="lead">
            Não foram encontrados resultados para a pesquisa...
          </p>
        )
      ) : listaProdutosFormatados.length ? (
        listaProdutosFormatados.map((produto_formatado: any) => (
          <KartListItem
            key={produto_formatado.id}
            produto_formatado={produto_formatado}
          />
        ))
      ) : (
        <p className="lead">Não foram encontrados produtos...</p>
      )}
    </>
  );
}
