import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import WarrantyPage from './pages/WarrantyPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import BlogPage from './pages/BlogPage';
import CreatePostPage from './pages/CreatePostPage';
import MyPostsPage from './pages/MyPostsPage';
import PostDetailPage from './pages/PostDetailPage';
import AdminLayout from './components/admin/AdminLayout';
import DashboardOverview from './pages/admin/DashboardOverview';
import ManageProducts from './pages/admin/ManageProducts';
import ManageOrders from './pages/admin/ManageOrders';
import ManageUsers from './pages/admin/ManageUsers';
import ManageBlog from './pages/admin/ManageBlog';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleBuy = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    // Show toast instead of opening drawer
    setToastMessage(`Đã thêm ${product.name} vào giỏ hàng`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckoutCart = () => {
    setIsCartOpen(false);
    // Open standard checkout modal with first item or aggregate details
    // For now, let's just alert
    alert('Chức năng thanh toán giỏ hàng đang được phát triển!');
  };

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="blog" element={<ManageBlog />} />
        </Route>

        {/* Storefront Routes */}
        <Route path="*" element={
          <div className="app-container">
            <Header 
              toggleTheme={toggleTheme} 
              currentTheme={theme} 
              cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              onCartClick={() => setIsCartOpen(true)}
            />
            <main>
              <Routes>
                <Route path="/" element={<HomePage onBuy={handleBuy} onAddToCart={handleAddToCart} />} />
                <Route path="/products" element={<ProductsPage onBuy={handleBuy} onAddToCart={handleAddToCart} />} />
                <Route path="/warranty" element={<WarrantyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/create" element={<CreatePostPage />} />
                <Route path="/blog/my-posts" element={<MyPostsPage />} />
                <Route path="/blog/:id" element={<PostDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
            {isModalOpen && <CheckoutModal product={selectedProduct} onClose={() => setIsModalOpen(false)} />}
            <CartDrawer 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
              cartItems={cartItems} 
              onRemoveItem={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onCheckout={handleCheckoutCart}
            />
            
            <div className={`toast-notification ${toastMessage ? 'show' : ''}`}>
              <i className="fa-solid fa-circle-check"></i>
              <span>{toastMessage}</span>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
