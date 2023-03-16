import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();
//Context hook
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const cartStorage = localStorage.getItem('cart');
    return cartStorage ? JSON.parse(cartStorage) : [];
  });

  //Context funciones y logica
  const addItem = (id, name, price, img_src, count) => {
    
    if (isInCart(id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + count };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      const newItem = { id, name, quantity: count, price, img_src };
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return Boolean(cart.find((item) => item.id === id));
  };

  const cartTotal = () => {
    const total = cart.reduce((acc, currItem) => {
      acc += currItem.quantity * currItem.price;
      return acc;
    }, 0);
    return total;
  };

  const isCartEmpty = () => {
    return Boolean(cart.length === 0);
  };

  const cartTotalItems = () => {
    const total = cart.reduce((acc, currItem) => {
      acc += currItem.quantity;
      return acc;
    }, 0);
    return total;
  };

  const cartItemCount = (id) => {
    const item = cart.find((item) => item.id === id);
    const count = (item && item.quantity) || 0;
    return count;
  };

  //useEffect to store cart in Local Storage everytime it is updated

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        cartTotal,
        isCartEmpty,
        cartTotalItems,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider; 