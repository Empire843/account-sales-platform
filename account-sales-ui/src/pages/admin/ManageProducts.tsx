import React, { useState } from 'react';

const ManageProducts: React.FC = () => {
    const [products] = useState([
        { id: 1, name: 'Tài khoản ChatGPT Plus', category: 'AI', price: '450,000đ', stock: 15, status: 'Còn hàng' },
        { id: 2, name: 'Tài khoản Claude Pro', category: 'AI', price: '500,000đ', stock: 8, status: 'Còn hàng' },
        { id: 3, name: 'Tài khoản Cursor Pro', category: 'Dev Tools', price: '400,000đ', stock: 0, status: 'Hết hàng' },
        { id: 4, name: 'Key Windows 11 Pro', category: 'Software', price: '250,000đ', stock: 50, status: 'Còn hàng' },
        { id: 5, name: 'Office 365 1 Năm', category: 'Software', price: '300,000đ', stock: 25, status: 'Còn hàng' },
    ]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quản lý Sản phẩm</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Thêm, sửa, xóa các sản phẩm trong hệ thống.</p>
                </div>
                <button className="btn btn-primary">
                    <i className="fa-solid fa-plus"></i> Thêm sản phẩm mới
                </button>
            </div>

            <div className="admin-table-container">
                <div className="admin-table-header" style={{ display: 'flex', gap: '16px' }}>
                    <div className="search-box" style={{ background: 'var(--bg-base)', width: '300px' }}>
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm sản phẩm..." style={{ width: '100%' }} />
                    </div>
                    <select className="btn btn-secondary" style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
                        <option>Tất cả danh mục</option>
                        <option>AI</option>
                        <option>Dev Tools</option>
                        <option>Software</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Danh mục</th>
                            <th>Giá bán</th>
                            <th>Tồn kho</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>#{product.id}</td>
                                <td style={{ fontWeight: 500 }}>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <span className={`status-badge ${product.stock > 0 ? 'success' : 'danger'}`}>
                                        {product.status}
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
                <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Hiển thị 1-5 trên tổng số 5 sản phẩm</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn btn-secondary" disabled>Trước</button>
                        <button className="btn btn-secondary" disabled>Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
