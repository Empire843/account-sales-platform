import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Claude 3.5 Sonnet Pro",
    category: "ai dev",
    iconClass: "claude",
    iconName: "fa-brain",
    desc: "Trải nghiệm AI mạnh mẽ nhất cho lập trình và phân tích dữ liệu.",
    features: [
      "Cấp tài khoản dùng riêng",
      "Bảo hành full time",
      "Giới hạn 500 msg/ngày"
    ],
    oldPrice: "500.000đ",
    price: "299.000đ",
    badge: { text: "-40%", type: "discount" }
  },
  {
    id: 2,
    name: "Cursor Editor Pro",
    category: "ai dev",
    iconClass: "cursor",
    iconName: "fa-terminal",
    desc: "Code editor AI đỉnh cao, tiết kiệm 50% thời gian code của bạn.",
    features: [
      "Fast requests không giới hạn",
      "Tích hợp Claude 3.5 & GPT-4o",
      "Dùng trên 2 thiết bị"
    ],
    oldPrice: "450.000đ",
    price: "249.000đ",
    badge: { text: "HOT", type: "hot" }
  },
  {
    id: 3,
    name: "ChatGPT Plus (Cấp API)",
    category: "ai",
    iconClass: "chatgpt",
    iconName: "fa-comment-dots",
    desc: "Bao gồm GPT-4o, DALL-E 3 và Advanced Data Analysis.",
    features: [
      "Tài khoản chính chủ",
      "Nạp qua thẻ tín dụng ảo",
      "Không lo block IP"
    ],
    oldPrice: "550.000đ",
    price: "480.000đ"
  }
];

interface ProductGridProps {
  onBuy: (product: any) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onBuy }) => {
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
                    <button className={`tab-btn ${filter === 'ai' ? 'active' : ''}`} onClick={() => setFilter('ai')}>AI Tools</button>
                    <button className={`tab-btn ${filter === 'dev' ? 'active' : ''}`} onClick={() => setFilter('dev')}>Developer</button>
                    <button className={`tab-btn ${filter === 'design' ? 'active' : ''}`} onClick={() => setFilter('design')}>Design</button>
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
                            <button className="btn btn-primary w-100 buy-btn" onClick={() => onBuy(product)}>Mua Ngay</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ProductGrid;
