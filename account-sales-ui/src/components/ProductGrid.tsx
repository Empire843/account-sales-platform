import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "FB Auto Poster Pro",
    category: "social",
    iconClass: "facebook",
    iconName: "fa-facebook",
    desc: "Công cụ đăng bài tự động hàng loạt lên các hội nhóm Facebook.",
    features: [
      "Đăng bài không giới hạn",
      "Hỗ trợ nhiều tài khoản",
      "License 1 năm"
    ],
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
    features: [
      "Vượt captcha tự động",
      "Hỗ trợ nhiều API",
      "License 1 năm"
    ],
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
    features: [
      "Xuất file Excel/CSV",
      "Tốc độ quét cao",
      "Cập nhật miễn phí"
    ],
    oldPrice: "600.000đ",
    price: "299.000đ"
  }
];

interface ProductGridProps {
  onBuy: (product: any) => void;
  onAddToCart?: (product: any) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onBuy, onAddToCart }) => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category.includes(filter));

  return (
    <section id="products" className="products">
        <div className="container">
            <div className="section-header">
                <h2>Sản phẩm nổi bật</h2>
                <div className="filter-tabs">
                    <button className={`tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Tất cả</button>
                    <button className={`tab-btn ${filter === 'social' ? 'active' : ''}`} onClick={() => setFilter('social')}>Social Media</button>
                    <button className={`tab-btn ${filter === 'automation' ? 'active' : ''}`} onClick={() => setFilter('automation')}>Automation</button>
                    <button className={`tab-btn ${filter === 'data' ? 'active' : ''}`} onClick={() => setFilter('data')}>Data Scraping</button>
                </div>
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
        </div>
    </section>
  );
};

export default ProductGrid;
