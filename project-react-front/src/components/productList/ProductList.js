import React from "react";
import { ItsMain,Product,StyledIMG,SetctionProd } from "./styledProductList";

function ProductList({ products, onAddToCart }) {
  return (
    <ItsMain>
      <h3>Lista de Produtos</h3>
      <Product>
        {products.map((product) => (
          <SetctionProd key={product.id}>
            <StyledIMG src={product.image} alt="" />
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </SetctionProd>
        ))}
      </Product>
    </ItsMain>
  );
}

export default ProductList;

