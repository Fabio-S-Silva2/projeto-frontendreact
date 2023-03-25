import React from "react";
import { Footer,StyledIMG,SectionCart,SectionItem } from "./styledCart";

function Cart({cartItems, handleRemoveFromCart, handleCheckout, removeItemFromCart, addItemFromCart }) {

  
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Footer>
      <h3>Carrinho de Compras</h3>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <SectionCart>
          {cartItems.map((item) => (
            <SectionItem key={item.id}>
              <StyledIMG src={item.image}/>
              <p><strong>{item.name}</strong></p>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              <p>
                Quantidade: <button type={"submit"} onClick={()=>removeItemFromCart(item)} ><b>-</b> </button> {item.quantity}
                <button type={"submit"} onClick={()=>addItemFromCart(item)} ><b>+</b> </button>
              </p>
              <button onClick={() => handleRemoveFromCart(item)}>
                Remover do Carrinho
              </button>
            </SectionItem>
          ))}
          <span>Total: R$ {total.toFixed(2)}</span>
          <button onClick= {handleCheckout}  >Finalizar Compra</button>
        </SectionCart>
      )}
    </Footer>
  );
}

export default Cart;
