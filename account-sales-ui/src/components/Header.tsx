import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const location = useLocation();

  return (
    <header className="navbar">
        <div className="container nav-container">
            <Link to="/" className="logo">
                <i className="fa-solid fa-bolt"></i>
                <span>ProAccounts</span>
            </Link>
            <nav className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Trang chủ</Link>
                <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Sản phẩm</Link>
                <Link to="/warranty" className={location.pathname === '/warranty' ? 'active' : ''}>Bảo hành</Link>
                <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Liên hệ</Link>
            </nav>
            <div className="nav-actions">
                <div className="search-box">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <button className="icon-btn theme-toggle" onClick={toggleTheme}>
                    <i className={`fa-solid ${currentTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
                <button className="icon-btn cart-btn">
                    <i className="fa-solid fa-shopping-cart"></i>
                    <span className="badge">0</span>
                </button>
                <Link to="/login" className="btn btn-primary login-btn">Đăng nhập</Link>
            </div>
        </div>
    </header>
  );
};

export default Header;
