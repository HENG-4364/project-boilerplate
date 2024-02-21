"use client";
import { rule } from 'postcss';
import React, { createContext, useState, ReactNode, useEffect, ChangeEvent } from 'react';

interface Item {
  id: number;
  amount: number;
  qty: number;
}

interface CartContextValue {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  addToCart: (item: Item) => void;
  cart: Item[];
  removeFromCart: (id: number) => void;
  itemsAmount: number;
  totalAmount: number;
  handleInput: (e: ChangeEvent<HTMLSelectElement>, id: number) => void;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>, id: number) => void;
  clearCart: () => void,

}

export const CartContext = createContext<CartContextValue>({
  isOpen: false,
  setIsOpen: () => { },
  addToCart: () => { },
  cart: [],
  removeFromCart: () => { },
  itemsAmount: 0,
  totalAmount: 0,
  handleInput: () => { },
  handleSelect: () => { },
  clearCart: () => { },
});

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<Item[]>([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateCartAmounts = () => {
      let itemCount = 0;
      let total = 0;


      cart.forEach((item) => {
        itemCount += item.qty;
        total += item.amount * item.qty;

      });

      setItemsAmount(itemCount);
      setTotalAmount(total);

    };

    calculateCartAmounts();
  }, [cart]);

  const addToCart = (item: Item) => {
    const newItem: Item = { ...item };
    setCart((prevCart) => {
      let duplicate = false;
      const updatedItems = prevCart.map((item) => {
        if (item.id === newItem.id) {
          duplicate = true;

          return {
            ...item,
            qty: item.qty + newItem.qty,
          };
        }
        return item;
      });

      return duplicate ? updatedItems : [...prevCart, newItem];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleInput = (e: ChangeEvent<HTMLSelectElement>, id: number) => {
    const inputValue = parseInt(e.target.value);
    const updatedItems = cart.find((item) => {
      return item.id === id;

    });
    if (updatedItems) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          if (isNaN(inputValue)) {
            setItemsAmount(1)
            return { ...item, qty: 1 }
          } else {
            setItemsAmount(inputValue)
            return { ...item, qty: inputValue }
          }

        } else {
          return item
        }
      })
      setCart(newCart);
    }




  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>, id: number) => {
    const selectValue = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setItemsAmount(selectValue);
          return { ...item, qty: selectValue }
        } else {
          return item
        }
      })
      setCart(newCart);
    }

  }
  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        totalAmount,
        handleInput,
        handleSelect,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;