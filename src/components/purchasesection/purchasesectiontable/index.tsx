import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { convertNumberToPrice } from "../../../core/utils";
import PurchaseSectionTableItem from "./purchasesectiontableitem";

export interface IPurchaseSectionTable {
  lista_produtos: any;
}

export default function PurchaseSectionTable({
  lista_produtos,
}: IPurchaseSectionTable) {
  const [listaProdutosFormatados, setListaProdutosFormatados] = React.useState<
    any
  >([]);

  const produtos_carrinho = useSelector(
    (state: any) => state.shopping_kart_reducer.produtos_carrinho
  );

  const texto_pesquisado = useSelector(
    (state: any) => state.shopping_kart_reducer.texto_pesquisado
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

  const getQuantidadeItems = (): number => {
    return produtos_carrinho.reduce(
      (acc: any, cur: any) => acc + cur.quantidade_escolhida,
      0
    );
  };

  const getPrecoProduto = (id: number): number => {
    if (lista_produtos.find((produto: any) => produto.id === id)) {
      return lista_produtos.find((produto: any) => produto.id === id)
        .valor_unitario;
    }

    return 0;
  };

  const getTotalEmProdutos = (): number => {
    let total_em_produtos = 0;

    produtos_carrinho.map((produto_carrinho: any) => {
      if (produto_carrinho.quantidade_escolhida) {
        const preco_produto = getPrecoProduto(produto_carrinho.id);

        const total_produto =
          preco_produto * produto_carrinho.quantidade_escolhida;
        total_em_produtos += total_produto;
      }
    });

    return total_em_produtos;
  };

  const getDescontoReais = (): number => {
    if (getQuantidadeItems() >= 50) return (getTotalEmProdutos() / 100) * 20;
    else if (getTotalEmProdutos() >= 200)
      return (getTotalEmProdutos() / 100) * 10;
    else return 0;
  };

  React.useEffect(() => {
    setListaProdutosFormatados(
      produtos_carrinho
        .map((produto_carrinho: any) => formatarProduto(produto_carrinho))
        .filter(
          (produto_carrinho: any) => produto_carrinho.quantidade_escolhida
        )
    );
  }, [produtos_carrinho]);

  console.log("listaProdutosFormatados = ", listaProdutosFormatados);

  return (
    <div className="purchase-section-table">
      <div className=" purchase-section-table-wrapper-scroll-y  purchase-section-table-scrollbar">
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <td
                colSpan={5}
                className="text-center secondary-background text-white"
              >
                {" "}
                Produtos Escolhidos{" "}
                <span className="font-weight-bold">
                  {" "}
                  {`(TOTAL: R$ ${convertNumberToPrice(
                    getTotalEmProdutos() - getDescontoReais()
                  )})`}{" "}
                </span>
                <span className="font-weight-bold"> </span>
              </td>
            </tr>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Observação</th>
              <th scope="col">Preço Unidade</th>
              <th scope="col">Preço Total</th>
            </tr>
          </thead>
          <tbody>
            {texto_pesquisado.length ? (
              listaProdutosFormatados.filter((produto_formatado: string) =>
                filtrarProdutosCarrinho(produto_formatado, texto_pesquisado)
              ).length ? (
                listaProdutosFormatados
                  .filter((produto_formatado: string) =>
                    filtrarProdutosCarrinho(produto_formatado, texto_pesquisado)
                  )
                  .map((produto_encontrado: any) => (
                    <PurchaseSectionTableItem
                      key={produto_encontrado.id}
                      item={produto_encontrado}
                    />
                  ))
              ) : (
                <tr>
                  <td colSpan={5}>
                    {" "}
                    <p className="lead p-2">
                      Não foram encontrados produtos para esta pesquisa...
                    </p>{" "}
                  </td>
                </tr>
              )
            ) : listaProdutosFormatados.length ? (
              listaProdutosFormatados.map((produto_formatado: any) => (
                <PurchaseSectionTableItem
                  key={produto_formatado.id}
                  item={produto_formatado}
                />
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  {" "}
                  <p className="lead p-2">
                    Não há produtos no carrinho...
                  </p>{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
