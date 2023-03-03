import React from 'react';
import CartListContainer from './CartListContainer';
import CartSummary from './CartSummary';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { isCartEmpty } = useCartContext();

  if (isCartEmpty()) {
    return (
      <section className="sectionCenter">
        <div className="emptyCartContainer">
          <h2 className="emptyCartMsg">Tu carrito está vació!</h2>
          <Link to="/" className="emptyCartBackBtn">
            Seguir Comprando
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="sectionCenter cartContainer">
        <CartSummary />
        <CartListContainer />
      </section>
    </>
  );
};

export default CartContainer;
