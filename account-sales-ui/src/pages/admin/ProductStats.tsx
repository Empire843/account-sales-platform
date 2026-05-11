import React from 'react';

const ProductStats: React.FC = () => {
    // Mock data for statistics
    const topProducts = [
        { id: 1, name: 'FB Auto Poster Pro', sales: 1250, revenue: '623,750,000đ', conversionRate: '12.5%' },
        { id: 2, name: 'Shopee Auto Checkout', sales: 840, revenue: '335,160,000đ', conversionRate: '8.2%' },
        { id: 3, name: 'Tiktok Data Scraper', sales: 520, revenue: '155,480,000đ', conversionRate: '5.4%' },
        { id: 4, name: 'Tele Forwarder Bot', sales: 430, revenue: '107,070,000đ', conversionRate: '9.1%' },
        { id: 5, name: 'Email Bulk Sender', sales: 310, revenue: '185,690,000đ', conversionRate: '4.8%' },
    ];

    return (
        <div>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Thống kê Sản phẩm</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Báo cáo doanh số, tỷ lệ chuyển đổi và hiệu suất của các Tool.</p>
            </div>

            {/* Quick Stats Cards */}
            <div className="admin-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
                <div className="admin-stat-card" style={{ background: 'var(--bg-base)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Tổng Doanh Thu Tool</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--success-color)' }}>1.4B đ</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--success-color)', marginTop: '8px' }}><i className="fa-solid fa-arrow-up"></i> +15% so với tháng trước</div>
                </div>
                <div className="admin-stat-card" style={{ background: 'var(--bg-base)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Tổng Số Lượt Tải / Cấp Key</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>3,350</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--success-color)', marginTop: '8px' }}><i className="fa-solid fa-arrow-up"></i> +8% so với tháng trước</div>
                </div>
                <div className="admin-stat-card" style={{ background: 'var(--bg-base)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Tỷ lệ chuyển đổi trung bình</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>8.0%</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Ổn định</div>
                </div>
                <div className="admin-stat-card" style={{ background: 'var(--bg-base)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Sản phẩm bán chạy nhất</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>FB Auto Poster Pro</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Chiếm 45% tổng doanh thu</div>
                </div>
            </div>

            {/* Top Products Table */}
            <div className="admin-table-container">
                <div className="admin-table-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Bảng Xếp Hạng Doanh Số Tool</h3>
                    <select className="btn btn-secondary" style={{ padding: '6px 12px', borderRadius: '4px' }}>
                        <option>30 ngày qua</option>
                        <option>Tháng này</option>
                        <option>Năm nay</option>
                        <option>Tất cả thời gian</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Hạng</th>
                            <th>Tên Tool</th>
                            <th>Số lượt mua (Keys)</th>
                            <th>Doanh thu mang lại</th>
                            <th>Tỷ lệ chuyển đổi</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topProducts.map((product, index) => (
                            <tr key={product.id}>
                                <td>
                                    <span style={{ 
                                        display: 'inline-block', 
                                        width: '24px', 
                                        height: '24px', 
                                        lineHeight: '24px', 
                                        textAlign: 'center', 
                                        borderRadius: '50%', 
                                        background: index < 3 ? 'var(--primary-color)' : 'var(--bg-base)', 
                                        color: index < 3 ? '#fff' : 'var(--text-primary)',
                                        fontWeight: 'bold'
                                    }}>
                                        {index + 1}
                                    </span>
                                </td>
                                <td style={{ fontWeight: 500 }}>{product.name}</td>
                                <td>{product.sales} keys</td>
                                <td style={{ color: 'var(--success-color)', fontWeight: 'bold' }}>{product.revenue}</td>
                                <td>{product.conversionRate}</td>
                                <td>
                                    <button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.85rem' }}>
                                        Chi tiết
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Chart placeholder */}
            <div style={{ marginTop: '30px', background: 'var(--bg-base)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <i className="fa-solid fa-chart-line" style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '16px' }}></i>
                <h3 style={{ margin: '0 0 8px 0' }}>Biểu đồ tăng trưởng</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Khu vực hiển thị biểu đồ đường/cột cho doanh số theo thời gian (sử dụng Chart.js hoặc Recharts).</p>
            </div>
        </div>
    );
};

export default ProductStats;
