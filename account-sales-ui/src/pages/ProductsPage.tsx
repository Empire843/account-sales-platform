import React, { useState } from 'react';

const allProducts = [
  {
    id: 1,
    name: "FB Auto Poster Pro",
    category: "social",
    iconClass: "facebook",
    iconName: "fa-facebook",
    desc: "Công cụ đăng bài tự động hàng loạt lên các hội nhóm Facebook.",
    features: ["Đăng bài không giới hạn", "Hỗ trợ nhiều tài khoản", "License 1 năm"],
    oldPrice: "1.000.000đ",
    price: "499.000đ",
    badge: { text: "-50%", type: "discount" }
  },
  {
    id: 2,
    name: "Shopee Auto Checkout",
    category: "automation",
    iconClass: "shopee",
    iconName: "fa-cart-shopping",
    desc: "Phần mềm săn sale Shopee, tự động thêm vào giỏ và thanh toán siêu tốc.",
    features: ["Vượt captcha tự động", "Hỗ trợ nhiều API", "License 1 năm"],
    oldPrice: "800.000đ",
    price: "399.000đ",
    badge: { text: "HOT", type: "hot" }
  },
  {
    id: 3,
    name: "Tiktok Data Scraper",
    category: "data",
    iconClass: "tiktok",
    iconName: "fa-tiktok",
    desc: "Cào dữ liệu video, bình luận, và thông tin người dùng từ Tiktok.",
    features: ["Xuất file Excel/CSV", "Tốc độ quét cao", "Cập nhật miễn phí"],
    oldPrice: "600.000đ",
    price: "299.000đ"
  },
  {
    id: 4,
    name: "Tele Forwarder Bot",
    category: "social",
    iconClass: "telegram",
    iconName: "fa-paper-plane",
    desc: "Tự động copy tin nhắn từ nhiều group Telegram sang group của bạn.",
    features: ["Lọc từ khóa thông minh", "Không cần quyền Admin", "License Vĩnh viễn"],
    oldPrice: "500.000đ",
    price: "249.000đ",
    badge: { text: "NEW", type: "hot" }
  },
  {
    id: 5,
    name: "Email Bulk Sender",
    category: "marketing",
    iconClass: "email",
    iconName: "fa-envelope",
    desc: "Phần mềm gửi email hàng loạt không bị vào mục Spam.",
    features: ["Hỗ trợ nhiều SMTP", "Quản lý chiến dịch", "Tích hợp AI viết thư"],
    oldPrice: "1.200.000đ",
    price: "599.000đ"
  },
  {
    id: 6,
    name: "Zalo Auto Care",
    category: "social",
    iconClass: "zalo",
    iconName: "fa-comment",
    desc: "Tự động gửi tin nhắn chăm sóc khách hàng trên Zalo.",
    features: ["Gửi tin nhắn kèm ảnh", "Hẹn giờ gửi tin", "License 6 tháng"],
    oldPrice: "400.000đ",
    price: "199.000đ"
  }
];

interface ProductsPageProps {
  onBuy: (product: any) => void;
  onAddToCart?: (product: any) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onBuy, onAddToCart }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  let filteredProducts = filter === 'all'
    ? allProducts
    : allProducts.filter(p => p.category.includes(filter));

  if (searchTerm) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))
    );
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''))
    );
  }

  return (
    <section className="page-section products-page">
      <div className="container">
        <div className="page-hero">
          <h1>Tất cả <span className="text-gradient">Sản phẩm</span></h1>
          <p>Khám phá bộ sưu tập công cụ tự động hóa đa dạng giúp tối ưu quy trình làm việc</p>
        </div>

        <div className="products-toolbar">
          <div className="search-filter-box">
            <i className="fa-solid fa-search"></i>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="toolbar-right">
            <div className="filter-tabs">
              {['all', 'social', 'automation', 'data'].map(cat => (
                <button
                  key={cat}
                  className={`tab-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'all' ? 'Tất cả' : cat === 'social' ? 'Social Media' : cat === 'automation' ? 'Automation' : 'Data Scraping'}
                </button>
              ))}
            </div>
            <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
            </select>
          </div>
        </div>

        <div className="products-count">
          Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              {product.badge && (
                <div className={`card-badge ${product.badge.type}`}>{product.badge.text}</div>
              )}
              <div className="card-image">
                <div className={`product-icon ${product.iconClass}`}>
                  <i className={`fa-solid ${product.iconName}`}></i>
                </div>
              </div>
              <div className="card-content">
                <h3>{product.name}</h3>
                <p className="desc">{product.desc}</p>
                <ul className="features">
                  {product.features.map((feature, idx) => (
                    <li key={idx}><i className="fa-solid fa-check"></i> {feature}</li>
                  ))}
                </ul>
                <div className="pricing">
                  <span className="old-price">{product.oldPrice}</span>
                  <span className="current-price">{product.price}<small>/tháng</small></span>
                </div>
                <div className="card-actions">
                  <button className="btn-icon-outline" onClick={() => onAddToCart && onAddToCart(product)} title="Thêm vào giỏ hàng">
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button className="btn btn-primary buy-btn" onClick={() => onBuy(product)}>Mua Ngay</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <i className="fa-solid fa-box-open"></i>
            <h3>Không tìm thấy sản phẩm</h3>
            <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
