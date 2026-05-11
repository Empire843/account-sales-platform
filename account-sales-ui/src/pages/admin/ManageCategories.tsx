import React, { useState } from 'react';

const ManageCategories: React.FC = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Social Media', slug: 'social', description: 'Các công cụ tương tác mạng xã hội', productCount: 15 },
        { id: 2, name: 'Automation', slug: 'automation', description: 'Công cụ tự động hóa quy trình, checkout', productCount: 8 },
        { id: 3, name: 'Data Scraping', slug: 'data', description: 'Trích xuất dữ liệu đa nền tảng', productCount: 12 },
        { id: 4, name: 'Marketing', slug: 'marketing', description: 'Gửi email, SMS hàng loạt', productCount: 5 }
    ]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quản lý Danh mục</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Quản lý các danh mục Tool hiển thị trên trang chủ.</p>
                </div>
                <button className="btn btn-primary">
                    <i className="fa-solid fa-plus"></i> Thêm danh mục mới
                </button>
            </div>

            <div className="admin-table-container">
                <div className="admin-table-header" style={{ display: 'flex', gap: '16px' }}>
                    <div className="search-box" style={{ background: 'var(--bg-base)', width: '300px' }}>
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm danh mục..." style={{ width: '100%' }} />
                    </div>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên danh mục</th>
                            <th>Đường dẫn (Slug)</th>
                            <th>Mô tả</th>
                            <th>Số lượng SP</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>#{category.id}</td>
                                <td style={{ fontWeight: 500 }}>{category.name}</td>
                                <td><code>{category.slug}</code></td>
                                <td>{category.description}</td>
                                <td>
                                    <span style={{ background: 'var(--primary-color)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, display: 'inline-block' }}>
                                        {category.productCount}
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
        </div>
    );
};

export default ManageCategories;
