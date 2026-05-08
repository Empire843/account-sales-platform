import React from 'react';
import { Link } from 'react-router-dom';

const mockPosts = [
  {
    id: 1,
    title: 'Kinh nghiệm quản lý hàng trăm tài khoản ChatGPT hiệu quả',
    excerpt: 'Chia sẻ các tips và tool giúp bạn quản lý số lượng lớn tài khoản an toàn, tránh bị ban và tối ưu chi phí duy trì.',
    category: 'Chia sẻ',
    date: '08/05/2026',
    views: 1205,
    author: {
        name: 'Trần Văn A',
        role: 'Pro Seller',
        initial: 'A'
    },
    image: 'linear-gradient(45deg, #8b5cf6, #3b82f6)'
  },
  {
    id: 2,
    title: 'Xu hướng sử dụng API Claude 3 trong doanh nghiệp',
    excerpt: 'Tại sao ngày càng nhiều công ty chuyển sang sử dụng Claude 3 thay vì GPT-4 cho các tác vụ xử lý tài liệu nội bộ.',
    category: 'Xu hướng',
    date: '05/05/2026',
    views: 843,
    author: {
        name: 'Nguyễn Thị B',
        role: 'AI Researcher',
        initial: 'B'
    },
    image: 'linear-gradient(45deg, #ec4899, #f43f5e)'
  },
  {
    id: 3,
    title: 'Cảnh báo: Chiêu trò lừa đảo mua bán tài khoản mới',
    excerpt: 'Cập nhật các hình thức scam mới nhất trên thị trường MMO và cách phòng tránh để bảo vệ tài sản của bạn.',
    category: 'Cảnh báo',
    date: '01/05/2026',
    views: 2500,
    author: {
        name: 'Admin',
        role: 'System Admin',
        initial: 'AD'
    },
    image: 'linear-gradient(45deg, #ef4444, #f97316)'
  },
  {
    id: 4,
    title: 'Hướng dẫn tích hợp OpenAI API vào ứng dụng Node.js',
    excerpt: 'Từng bước xây dựng một chatbot AI cơ bản sử dụng thư viện openai và Node.js chỉ trong 30 phút.',
    category: 'Hướng dẫn',
    date: '28/04/2026',
    views: 956,
    author: {
        name: 'Lê Hoàng C',
        role: 'Developer',
        initial: 'C'
    },
    image: 'linear-gradient(45deg, #10b981, #3b82f6)'
  },
  {
    id: 5,
    title: 'Đánh giá chi tiết tính năng mới của Cursor IDE',
    excerpt: 'Liệu Cursor có thực sự vượt trội hơn VS Code kết hợp với GitHub Copilot? Cùng phân tích ưu và nhược điểm.',
    category: 'Đánh giá',
    date: '20/04/2026',
    views: 1542,
    author: {
        name: 'Phạm D',
        role: 'Tech Reviewer',
        initial: 'D'
    },
    image: 'linear-gradient(45deg, #0f172a, #64748b)'
  },
  {
    id: 6,
    title: 'Top 5 công cụ hỗ trợ bán hàng số tốt nhất năm 2026',
    excerpt: 'Tổng hợp các phần mềm không thể thiếu dành cho seller kinh doanh sản phẩm số trên các nền tảng.',
    category: 'Công cụ',
    date: '15/04/2026',
    views: 3102,
    author: {
        name: 'Trần Văn A',
        role: 'Pro Seller',
        initial: 'A'
    },
    image: 'linear-gradient(45deg, #06b6d4, #3b82f6)'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="page-hero" style={{ padding: '120px 0 60px', textAlign: 'center', background: 'radial-gradient(circle at top, rgba(139, 92, 246, 0.1), transparent 50%)' }}>
        <div className="container">
          <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '16px' }}>Cộng Đồng ProAccounts</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Nơi chia sẻ kiến thức, kinh nghiệm và cập nhật những thông tin mới nhất về thị trường tài khoản số và AI.
          </p>
        </div>
      </section>

      <section className="blog-section" style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="products-toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
             <div className="filter-tabs">
                <button className="tab-btn active">Tất cả</button>
                <button className="tab-btn">Chia sẻ</button>
                <button className="tab-btn">Hướng dẫn</button>
                <button className="tab-btn">Cảnh báo</button>
             </div>
             <div className="toolbar-right" style={{ display: 'flex', gap: '16px' }}>
                <div className="search-box" style={{ background: 'var(--bg-surface)' }}>
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Tìm bài viết..." />
                </div>
                <a href="/blog/my-posts" className="btn btn-secondary">
                    <i className="fa-solid fa-user-pen"></i> Bài viết của tôi
                </a>
                <a href="/blog/create" className="btn btn-primary">
                    <i className="fa-solid fa-pen"></i> Viết bài
                </a>
             </div>
          </div>

          <div className="blog-grid">
            {mockPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image" style={{ background: post.image }}>
                    <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                    <div className="blog-meta">
                        <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
                        <span><i className="fa-regular fa-eye"></i> {post.views}</span>
                    </div>
                    <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    
                    <div className="blog-author">
                        <div className="author-avatar">{post.author.initial}</div>
                        <div className="author-info">
                            <h4>{post.author.name}</h4>
                            <span>{post.author.role}</span>
                        </div>
                    </div>
                </div>
              </article>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <button className="btn btn-secondary">Xem thêm bài viết</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
