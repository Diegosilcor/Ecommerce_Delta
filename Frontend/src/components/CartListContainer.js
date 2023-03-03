import React from 'react';

//Import comoponentes
import CartItem from './CartItem';

//Importo Context
import { useCartContext } from '../context/CartContext';

const CartListContainer = () => {
  const { cart, removeItem, clearCart } = useCartContext();

  return (
    <>
      <div className="cartListContainer">
        {}
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            removeItem={removeItem}
          />
        ))}
        <button className="clearCartBtn" onClick={() => clearCart()}>
          Limpiar Carrito
        </button>
      </div>
    </>
  );
};

export default CartListContainer;
