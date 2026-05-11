import React, { useState } from 'react';

const ManageCoupons: React.FC = () => {
    const [coupons, setCoupons] = useState([
        { id: 1, code: 'TET2026', type: 'Phần trăm', value: '50%', minOrder: '0đ', usage: '12/100', status: 'Đang hoạt động', expiresAt: '28/02/2026' },
        { id: 2, code: 'NEWUSER', type: 'Số tiền cố định', value: '50.000đ', minOrder: '100.000đ', usage: '45/999', status: 'Đang hoạt động', expiresAt: '31/12/2026' },
        { id: 3, code: 'FLASH50', type: 'Phần trăm', value: '50%', minOrder: '0đ', usage: '50/50', status: 'Đã hết hạn', expiresAt: '01/05/2026' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quản lý Khuyến mãi</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Tạo và quản lý các mã giảm giá cho hệ thống.</p>
                </div>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                    <i className="fa-solid fa-plus"></i> Tạo mã mới
                </button>
            </div>

            <div className="admin-table-container">
                <div className="admin-table-header" style={{ display: 'flex', gap: '16px' }}>
                    <div className="search-box" style={{ background: 'var(--bg-base)', width: '300px' }}>
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm mã giảm giá..." style={{ width: '100%' }} />
                    </div>
                    <select className="btn btn-secondary" style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
                        <option>Tất cả trạng thái</option>
                        <option>Đang hoạt động</option>
                        <option>Đã hết hạn</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Mã giảm giá (Code)</th>
                            <th>Mức giảm</th>
                            <th>Đơn tối thiểu</th>
                            <th>Đã dùng</th>
                            <th>Ngày hết hạn</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map(coupon => (
                            <tr key={coupon.id}>
                                <td>#{coupon.id}</td>
                                <td><span style={{ background: 'var(--bg-base)', color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '14px', padding: '4px 10px', borderRadius: '6px', display: 'inline-block' }}>{coupon.code}</span></td>
                                <td>{coupon.value} ({coupon.type})</td>
                                <td>{coupon.minOrder}</td>
                                <td>{coupon.usage}</td>
                                <td>{coupon.expiresAt}</td>
                                <td>
                                    <span style={{ background: coupon.status === 'Đang hoạt động' ? 'var(--success-color)' : 'var(--border-color)', color: coupon.status === 'Đang hoạt động' ? '#fff' : 'var(--text-muted)', padding: '4px 10px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, display: 'inline-block' }}>
                                        {coupon.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-btns">
                                        <button className="action-btn" title="Chỉnh sửa"><i className="fa-solid fa-pen"></i></button>
                                        <button className="action-btn delete" title="Xóa"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal thêm mã giảm giá */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
                        <div className="modal-header">
                            <h3>Tạo mã giảm giá mới</h3>
                            <button className="icon-btn" onClick={() => setIsModalOpen(false)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Mã Coupon</label>
                                <input type="text" className="checkout-input" placeholder="VD: SUMMER2026" />
                            </div>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Loại giảm giá</label>
                                    <select className="checkout-input">
                                        <option>Phần trăm (%)</option>
                                        <option>Số tiền cố định (đ)</option>
                                    </select>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Mức giảm</label>
                                    <input type="text" className="checkout-input" placeholder="VD: 50" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Đơn hàng tối thiểu</label>
                                    <input type="text" className="checkout-input" placeholder="0đ" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Giới hạn sử dụng</label>
                                    <input type="number" className="checkout-input" placeholder="100" />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Ngày hết hạn</label>
                                <input type="date" className="checkout-input" />
                            </div>
                        </div>
                        <div className="modal-footer" style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                            <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Hủy</button>
                            <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Lưu mã giảm giá</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageCoupons;
