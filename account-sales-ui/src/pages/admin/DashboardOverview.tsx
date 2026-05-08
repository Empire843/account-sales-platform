import React from 'react';

const DashboardOverview: React.FC = () => {
    return (
        <div>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Tổng quan</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Xin chào, đây là số liệu thống kê hôm nay.</p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon blue">
                        <i className="fa-solid fa-wallet"></i>
                    </div>
                    <div className="stat-details">
                        <h3>Doanh thu tháng</h3>
                        <div className="stat-value">45,200,000đ</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon green">
                        <i className="fa-solid fa-shopping-bag"></i>
                    </div>
                    <div className="stat-details">
                        <h3>Đơn hàng mới</h3>
                        <div className="stat-value">124</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon purple">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="stat-details">
                        <h3>Khách hàng mới</h3>
                        <div className="stat-value">48</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon orange">
                        <i className="fa-solid fa-box-open"></i>
                    </div>
                    <div className="stat-details">
                        <h3>Sản phẩm đang bán</h3>
                        <div className="stat-value">32</div>
                    </div>
                </div>
            </div>

            {/* Charts Placeholder & Recent Orders */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
                <div className="admin-table-container" style={{ margin: 0 }}>
                    <div className="admin-table-header">
                        <h3>Đơn hàng gần đây</h3>
                        <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.9rem' }}>Xem tất cả</button>
                    </div>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Mã ĐH</th>
                                <th>Khách hàng</th>
                                <th>Sản phẩm</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#ORD-001</td>
                                <td>Nguyễn Văn A</td>
                                <td>Tài khoản ChatGPT Plus</td>
                                <td>450,000đ</td>
                                <td><span className="status-badge success">Hoàn thành</span></td>
                            </tr>
                            <tr>
                                <td>#ORD-002</td>
                                <td>Trần Thị B</td>
                                <td>Key Windows 11 Pro</td>
                                <td>250,000đ</td>
                                <td><span className="status-badge warning">Đang xử lý</span></td>
                            </tr>
                            <tr>
                                <td>#ORD-003</td>
                                <td>Lê Minh C</td>
                                <td>Tài khoản Claude Pro</td>
                                <td>500,000đ</td>
                                <td><span className="status-badge success">Hoàn thành</span></td>
                            </tr>
                            <tr>
                                <td>#ORD-004</td>
                                <td>Phạm Văn D</td>
                                <td>Tài khoản Cursor Pro</td>
                                <td>400,000đ</td>
                                <td><span className="status-badge danger">Đã hủy</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="admin-table-container" style={{ margin: 0 }}>
                    <div className="admin-table-header">
                        <h3>Sản phẩm bán chạy</h3>
                    </div>
                    <div style={{ padding: '20px' }}>
                        {[
                            { name: 'Tài khoản ChatGPT Plus', sales: 145, icon: 'claude', color: '#10a37f' },
                            { name: 'Tài khoản Claude Pro', sales: 98, icon: 'claude', color: '#d97757' },
                            { name: 'Tài khoản Cursor Pro', sales: 76, icon: 'claude', color: '#000000' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', paddingBottom: '16px', borderBottom: idx !== 2 ? '1px solid var(--border-color)' : 'none' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                    {item.name.charAt(0)}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{item.name}</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.sales} lượt mua</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
