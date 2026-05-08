import React, { useState } from 'react';

const allProducts = [
  {
    id: 1,
    name: "Claude 3.5 Sonnet Pro",
    category: "ai dev",
    iconClass: "claude",
    iconName: "fa-brain",
    desc: "Trải nghiệm AI mạnh mẽ nhất cho lập trình và phân tích dữ liệu.",
    features: ["Cấp tài khoản dùng riêng", "Bảo hành full time", "Giới hạn 500 msg/ngày"],
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
    features: ["Fast requests không giới hạn", "Tích hợp Claude 3.5 & GPT-4o", "Dùng trên 2 thiết bị"],
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
    features: ["Tài khoản chính chủ", "Nạp qua thẻ tín dụng ảo", "Không lo block IP"],
    oldPrice: "550.000đ",
    price: "480.000đ"
  },
  {
    id: 4,
    name: "Figma Professional",
    category: "design",
    iconClass: "figma",
    iconName: "fa-pen-nib",
    desc: "Công cụ thiết kế UI/UX chuyên nghiệp, cộng tác theo thời gian thực.",
    features: ["Unlimited projects", "Team collaboration", "Dev mode access"],
    oldPrice: "350.000đ",
    price: "199.000đ",
    badge: { text: "-43%", type: "discount" }
  },
  {
    id: 5,
    name: "GitHub Copilot Business",
    category: "dev",
    iconClass: "github",
    iconName: "fa-code",
    desc: "AI pair programmer từ GitHub, hỗ trợ viết code thông minh.",
    features: ["Code completions real-time", "Chat trong IDE", "Hỗ trợ 20+ ngôn ngữ"],
    oldPrice: "400.000đ",
    price: "279.000đ",
    badge: { text: "NEW", type: "hot" }
  },
  {
    id: 6,
    name: "Canva Pro",
    category: "design",
    iconClass: "canva",
    iconName: "fa-palette",
    desc: "Thiết kế đồ họa dễ dàng với hàng triệu template chuyên nghiệp.",
    features: ["100GB cloud storage", "Brand Kit", "Background Remover"],
    oldPrice: "300.000đ",
    price: "149.000đ"
  },
  {
    id: 7,
    name: "Notion AI Plus",
    category: "ai",
    iconClass: "notion",
    iconName: "fa-file-lines",
    desc: "Workspace all-in-one với AI tích hợp, quản lý công việc hiệu quả.",
    features: ["AI writing assistant", "Unlimited blocks", "Advanced analytics"],
    oldPrice: "280.000đ",
    price: "179.000đ"
  },
  {
    id: 8,
    name: "JetBrains All Products",
    category: "dev",
    iconClass: "jetbrains",
    iconName: "fa-laptop-code",
    desc: "Trọn bộ IDE chuyên nghiệp: IntelliJ, WebStorm, PyCharm, DataGrip...",
    features: ["All IDEs included", "License key chính chủ", "Update 1 năm"],
    oldPrice: "1.200.000đ",
    price: "799.000đ",
    badge: { text: "BEST", type: "hot" }
  },
  {
    id: 9,
    name: "Midjourney Standard",
    category: "ai design",
    iconClass: "midjourney",
    iconName: "fa-image",
    desc: "Tạo hình ảnh AI chất lượng cao, phong cách nghệ thuật độc đáo.",
    features: ["15h fast GPU/tháng", "Unlimited relaxed GPU", "Commercial usage"],
    oldPrice: "600.000đ",
    price: "399.000đ"
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
          <p>Khám phá bộ sưu tập tài khoản premium đa dạng với giá tốt nhất thị trường</p>
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
              {['all', 'ai', 'dev', 'design'].map(cat => (
                <button
                  key={cat}
                  className={`tab-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'all' ? 'Tất cả' : cat === 'ai' ? 'AI Tools' : cat === 'dev' ? 'Developer' : 'Design'}
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
