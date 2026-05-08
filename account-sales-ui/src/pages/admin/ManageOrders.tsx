import React, { useState } from 'react';

const ManageOrders: React.FC = () => {
    const [orders] = useState([
        { id: 'ORD-001', customer: 'Nguyễn Văn A', email: 'vana@gmail.com', product: 'Tài khoản ChatGPT Plus', total: '450,000đ', date: '08/05/2026', status: 'Hoàn thành' },
        { id: 'ORD-002', customer: 'Trần Thị B', email: 'tranthib@gmail.com', product: 'Key Windows 11 Pro', total: '250,000đ', date: '08/05/2026', status: 'Đang xử lý' },
        { id: 'ORD-003', customer: 'Lê Minh C', email: 'leminhc@gmail.com', product: 'Tài khoản Claude Pro', total: '500,000đ', date: '07/05/2026', status: 'Hoàn thành' },
        { id: 'ORD-004', customer: 'Phạm Văn D', email: 'phamvand@gmail.com', product: 'Tài khoản Cursor Pro', total: '400,000đ', date: '07/05/2026', status: 'Đã hủy' },
        { id: 'ORD-005', customer: 'Hoàng Thị E', email: 'hoangthie@gmail.com', product: 'Office 365 1 Năm', total: '300,000đ', date: '06/05/2026', status: 'Hoàn thành' },
    ]);

    const getStatusClass = (status: string) => {
        switch(status) {
            case 'Hoàn thành': return 'success';
            case 'Đang xử lý': return 'warning';
            case 'Đã hủy': return 'danger';
            default: return '';
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quản lý Đơn hàng</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Theo dõi và xử lý các đơn hàng từ khách hàng.</p>
                </div>
                <button className="btn btn-secondary">
                    <i className="fa-solid fa-download"></i> Xuất Excel
                </button>
            </div>

            <div className="admin-table-container">
                <div className="admin-table-header" style={{ display: 'flex', gap: '16px' }}>
                    <div className="search-box" style={{ background: 'var(--bg-base)', width: '300px' }}>
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm đơn hàng..." style={{ width: '100%' }} />
                    </div>
                    <select className="btn btn-secondary" style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
                        <option>Tất cả trạng thái</option>
                        <option>Hoàn thành</option>
                        <option>Đang xử lý</option>
                        <option>Đã hủy</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Mã ĐH</th>
                            <th>Khách hàng</th>
                            <th>Sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td style={{ fontWeight: 500 }}>#{order.id}</td>
                                <td>
                                    <div>{order.customer}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{order.email}</div>
                                </td>
                                <td>{order.product}</td>
                                <td>{order.total}</td>
                                <td>{order.date}</td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-btns">
                                        <button className="action-btn" title="Xem chi tiết"><i className="fa-solid fa-eye"></i></button>
                                        <button className="action-btn" title="Cập nhật trạng thái"><i className="fa-solid fa-pen"></i></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Hiển thị 1-5 trên tổng số 5 đơn hàng</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn btn-secondary" disabled>Trước</button>
                        <button className="btn btn-secondary" disabled>Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;
