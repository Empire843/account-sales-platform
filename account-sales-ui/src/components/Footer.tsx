import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
        <div className="container footer-container">
            <div className="footer-brand">
                <Link to="/" className="logo">
                    <i className="fa-solid fa-bolt"></i>
                    <span>ProAccounts</span>
                </Link>
                <p>Nền tảng cung cấp tài khoản phần mềm bản quyền tự động, uy tín hàng đầu Việt Nam.</p>
                <div className="social-links">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-telegram"></i></a>
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                </div>
            </div>
            <div className="footer-links">
                <h4>Sản phẩm</h4>
                <ul>
                    <li><Link to="/products">Tài khoản AI</Link></li>
                    <li><Link to="/products">Công cụ Lập trình</Link></li>
                    <li><Link to="/products">Giải trí & Media</Link></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Chính sách</h4>
                <ul>
                    <li><Link to="/warranty">Bảo hành & Hoàn tiền</Link></li>
                    <li><Link to="/warranty">Điều khoản sử dụng</Link></li>
                    <li><Link to="/contact">Liên hệ hỗ trợ</Link></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 ProAccounts. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
