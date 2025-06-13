import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Item = {
  name: string;
  price: number;
};

type CartContextType = {
  cartItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Item) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (name: string) =>
    setCartItems(prev => prev.filter(i => i.name !== name));
  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

