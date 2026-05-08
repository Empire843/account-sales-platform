import React, { useState } from 'react';

const ManageBlog: React.FC = () => {
    const [articles] = useState([
        { id: 'ART-001', title: 'Kinh nghiệm quản lý hàng trăm tài khoản ChatGPT hiệu quả', author: 'Trần Văn A', category: 'Chia sẻ', views: 1205, date: '08/05/2026', status: 'Đã xuất bản' },
        { id: 'ART-002', title: 'Xu hướng sử dụng API Claude 3 trong doanh nghiệp', author: 'Nguyễn Thị B', category: 'Xu hướng', views: 843, date: '05/05/2026', status: 'Đã xuất bản' },
        { id: 'ART-003', title: 'Cảnh báo: Chiêu trò lừa đảo mua bán tài khoản mới', author: 'Lê Minh C', category: 'Cảnh báo', views: 0, date: '08/05/2026', status: 'Chờ duyệt' },
        { id: 'ART-004', title: 'Hướng dẫn cài đặt môi trường lập trình tối ưu', author: 'Phạm Văn D', category: 'Hướng dẫn', views: 0, date: '07/05/2026', status: 'Chờ duyệt' },
        { id: 'ART-005', title: 'Cách spam tin nhắn mà không bị khóa tài khoản', author: 'Hacker Mũ Đen', category: 'Chia sẻ', views: 0, date: '06/05/2026', status: 'Bị từ chối' },
    ]);

    const getStatusClass = (status: string) => {
        switch(status) {
            case 'Đã xuất bản': return 'success';
            case 'Chờ duyệt': return 'warning';
            case 'Bị từ chối': return 'danger';
            default: return '';
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quản lý Bài viết</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Kiểm duyệt và quản lý các bài viết từ cộng đồng.</p>
                </div>
                <button className="btn btn-primary">
                    <i className="fa-solid fa-pen"></i> Viết bài mới
                </button>
            </div>

            <div className="stats-grid" style={{ marginBottom: '30px' }}>
                <div className="stat-card" style={{ padding: '20px' }}>
                    <div className="stat-details">
                        <h3>Tổng bài viết</h3>
                        <div className="stat-value" style={{ fontSize: '1.5rem' }}>142</div>
                    </div>
                </div>
                <div className="stat-card" style={{ padding: '20px' }}>
                    <div className="stat-details">
                        <h3>Đang chờ duyệt</h3>
                        <div className="stat-value" style={{ fontSize: '1.5rem', color: 'var(--warning-color)' }}>2</div>
                    </div>
                </div>
                <div className="stat-card" style={{ padding: '20px' }}>
                    <div className="stat-details">
                        <h3>Lượt xem tháng này</h3>
                        <div className="stat-value" style={{ fontSize: '1.5rem' }}>45.2K</div>
                    </div>
                </div>
            </div>

            <div className="admin-table-container">
                <div className="admin-table-header" style={{ display: 'flex', gap: '16px' }}>
                    <div className="search-box" style={{ background: 'var(--bg-base)', width: '300px' }}>
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Tìm bài viết, tác giả..." style={{ width: '100%' }} />
                    </div>
                    <select className="btn btn-secondary" style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
                        <option>Tất cả trạng thái</option>
                        <option>Đã xuất bản</option>
                        <option>Chờ duyệt</option>
                        <option>Bị từ chối</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Mã bài</th>
                            <th style={{ width: '35%' }}>Tiêu đề</th>
                            <th>Tác giả</th>
                            <th>Danh mục</th>
                            <th>Lượt xem</th>
                            <th>Trạng thái</th>
                            <th>Kiểm duyệt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map(article => (
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>
                                    <div style={{ fontWeight: 500, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {article.title}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                        Đăng ngày: {article.date}
                                    </div>
                                </td>
                                <td>{article.author}</td>
                                <td>{article.category}</td>
                                <td>{article.views.toLocaleString()}</td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(article.status)}`}>
                                        {article.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-btns">
                                        <button className="action-btn" title="Xem trước"><i className="fa-solid fa-eye"></i></button>
                                        
                                        {article.status === 'Chờ duyệt' && (
                                            <>
                                                <button className="action-btn" title="Duyệt bài" style={{ color: 'var(--success-color)' }}>
                                                    <i className="fa-solid fa-check"></i>
                                                </button>
                                                <button className="action-btn" title="Từ chối" style={{ color: 'var(--danger-color)' }}>
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </>
                                        )}
                                        
                                        <button className="action-btn" title="Chỉnh sửa"><i className="fa-solid fa-pen"></i></button>
                                        <button className="action-btn delete" title="Xóa"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Hiển thị 1-5 trên tổng số 142 bài viết</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn btn-secondary" disabled>Trước</button>
                        <button className="btn btn-secondary">Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;
