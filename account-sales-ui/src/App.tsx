import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import WarrantyPage from './pages/WarrantyPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import BlogPage from './pages/BlogPage';
import CreatePostPage from './pages/CreatePostPage';
import MyPostsPage from './pages/MyPostsPage';
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
            <Header toggleTheme={toggleTheme} currentTheme={theme} />
            <main>
              <Routes>
                <Route path="/" element={<HomePage onBuy={handleBuy} />} />
                <Route path="/products" element={<ProductsPage onBuy={handleBuy} />} />
                <Route path="/warranty" element={<WarrantyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/create" element={<CreatePostPage />} />
                <Route path="/blog/my-posts" element={<MyPostsPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
            {isModalOpen && <CheckoutModal product={selectedProduct} onClose={() => setIsModalOpen(false)} />}
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
