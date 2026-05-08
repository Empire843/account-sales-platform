import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../admin.css'; // Reusing table styles

const MyPostsPage: React.FC = () => {
    const navigate = useNavigate();
    const [myPosts] = useState([
        { id: 'ART-101', title: 'Hướng dẫn tối ưu tốc độ mạng khi dùng proxy', category: 'Hướng dẫn', views: 0, date: '08/05/2026', status: 'Chờ duyệt' },
        { id: 'ART-102', title: 'Review chi tiết gói ChatGPT Plus sau 3 tháng sử dụng', category: 'Đánh giá', views: 3450, date: '01/05/2026', status: 'Đã xuất bản' },
        { id: 'ART-103', title: 'Chia sẻ account Netflix miễn phí', category: 'Chia sẻ', views: 0, date: '25/04/2026', status: 'Bị từ chối' },
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
        <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Bài viết của tôi</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Quản lý và theo dõi trạng thái các bài viết bạn đã đóng góp cho cộng đồng.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="btn btn-secondary" onClick={() => navigate('/blog')}>
                            <i className="fa-solid fa-newspaper"></i> Xem Blog
                        </button>
                        <button className="btn btn-primary" onClick={() => navigate('/blog/create')}>
                            <i className="fa-solid fa-pen"></i> Viết bài mới
                        </button>
                    </div>
                </div>

                <div className="stats-grid" style={{ marginBottom: '30px' }}>
                    <div className="stat-card" style={{ padding: '20px' }}>
                        <div className="stat-details">
                            <h3>Đã xuất bản</h3>
                            <div className="stat-value" style={{ fontSize: '1.5rem', color: 'var(--success-color)' }}>1</div>
                        </div>
                    </div>
                    <div className="stat-card" style={{ padding: '20px' }}>
                        <div className="stat-details">
                            <h3>Đang chờ duyệt</h3>
                            <div className="stat-value" style={{ fontSize: '1.5rem', color: 'var(--warning-color)' }}>1</div>
                        </div>
                    </div>
                    <div className="stat-card" style={{ padding: '20px' }}>
                        <div className="stat-details">
                            <h3>Tổng lượt xem</h3>
                            <div className="stat-value" style={{ fontSize: '1.5rem' }}>3,450</div>
                        </div>
                    </div>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40%' }}>Tiêu đề</th>
                                <th>Danh mục</th>
                                <th>Ngày gửi</th>
                                <th>Lượt xem</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myPosts.length === 0 ? (
                                <tr>
                                    <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                                        Bạn chưa có bài viết nào. Hãy bắt đầu chia sẻ kiến thức ngay!
                                    </td>
                                </tr>
                            ) : (
                                myPosts.map(post => (
                                    <tr key={post.id}>
                                        <td>
                                            <div style={{ fontWeight: 500 }}>{post.title}</div>
                                            {post.status === 'Bị từ chối' && (
                                                <div style={{ fontSize: '0.85rem', color: 'var(--danger-color)', marginTop: '4px' }}>
                                                    Lý do: Vi phạm chính sách chia sẻ tài khoản.
                                                </div>
                                            )}
                                        </td>
                                        <td>{post.category}</td>
                                        <td>{post.date}</td>
                                        <td>{post.views.toLocaleString()}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(post.status)}`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-btns">
                                                {post.status === 'Đã xuất bản' && (
                                                    <Link to={`/blog/${post.id}`} className="action-btn" title="Xem bài viết">
                                                        <i className="fa-solid fa-eye"></i>
                                                    </Link>
                                                )}
                                                <button className="action-btn" title="Chỉnh sửa"><i className="fa-solid fa-pen"></i></button>
                                                <button className="action-btn delete" title="Xóa"><i className="fa-solid fa-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPostsPage;
