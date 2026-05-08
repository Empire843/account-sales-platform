"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import CartDrawer from '../CartDrawer';
import CheckoutModal from '../CheckoutModal';

interface CartItem {
  id: number;
  name: string;
  iconClass: string;
  iconName: string;
  price: string;
  quantity: number;
}

interface GlobalContextType {
  theme: string;
  toggleTheme: () => void;
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeFromCart: (id: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  selectedProduct: any;
  setSelectedProduct: (product: any) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within GlobalProvider");
  return context;
};

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    setToastMessage(`Đã thêm ${product.name} vào giỏ hàng`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckoutCart = () => {
    setIsCartOpen(false);
    alert('Chức năng thanh toán giỏ hàng đang được phát triển!');
  };

  return (
    <GlobalContext.Provider value={{
      theme, toggleTheme, cartItems, addToCart, updateQuantity, removeFromCart,
      isCartOpen, setIsCartOpen, isModalOpen, setIsModalOpen, selectedProduct, setSelectedProduct
    }}>
      {children}
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckoutCart}
      />
      
      {isModalOpen && <CheckoutModal product={selectedProduct} onClose={() => setIsModalOpen(false)} />}

      <div className={`toast-notification ${toastMessage ? 'show' : ''}`}>
        <i className="fa-solid fa-circle-check"></i>
        <span>{toastMessage}</span>
      </div>
    </GlobalContext.Provider>
  );
};
