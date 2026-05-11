import React, { useState } from 'react';

const ManageProducts: React.FC = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'FB Auto Poster Pro', category: 'Social Media', oldPrice: '1.000.000đ', price: '499.000đ', stock: 999, status: 'Còn hàng', badge: 'HOT', discount: '50%' },
        { id: 2, name: 'Shopee Auto Checkout', category: 'Automation', oldPrice: '800.000đ', price: '399.000đ', stock: 999, status: 'Còn hàng', badge: 'NEW', discount: '50%' },
        { id: 3, name: 'Tiktok Data Scraper', category: 'Data Scraping', oldPrice: '600.000đ', price: '299.000đ', stock: 999, status: 'Còn hàng', badge: '', discount: '50%' },
        { id: 4, name: 'Tele Forwarder Bot', category: 'Social Media', oldPrice: '500.000đ', price: '249.000đ', stock: 999, status: 'Còn hàng', badge: 'BEST', discount: '50%' },
        { id: 5, name: 'Email Bulk Sender', category: 'Marketing', oldPrice: '1.200.000đ', price: '599.000đ', stock: 999, status: 'Còn hàng', badge: '', discount: '50%' },
    ]);

    const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
    const [selectedProductForDiscount, setSelectedProductForDiscount] = useState<any>(null);

    const openDiscountModal = (product: any) => {
        setSelectedProductForDiscount(product);
        setIsDiscountModalOpen(true);
    };

    const handleSaveDiscount = () => {
        // Logic mô phỏng lưu giảm giá
        setIsDiscountModalOpen(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quản lý Sản phẩm</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Thêm, sửa, xóa phần mềm, cài đặt giảm giá và nhãn nổi bật.</p>
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
                        <option>Social Media</option>
                        <option>Automation</option>
                        <option>Data Scraping</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Danh mục</th>
                            <th>Giá gốc</th>
                            <th>Giá bán</th>
                            <th>Nhãn (Badge)</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>#{product.id}</td>
                                <td style={{ fontWeight: 500 }}>{product.name}</td>
                                <td>{product.category}</td>
                                <td style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>{product.oldPrice}</td>
                                <td style={{ color: 'var(--success-color)', fontWeight: 'bold' }}>{product.price}</td>
                                <td>
                                    {product.badge ? (
                                        <span style={{ background: 'var(--primary-color)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, display: 'inline-block' }}>
                                            {product.badge}
                                        </span>
                                    ) : (
                                        <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Không có</span>
                                    )}
                                </td>
                                <td>
                                    <div className="action-btns">
                                        <button className="action-btn" title="Cài đặt giảm giá" onClick={() => openDiscountModal(product)}><i className="fa-solid fa-tags"></i></button>
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

            {/* Modal Cài đặt giảm giá (Flash Sale) */}
            {isDiscountModalOpen && selectedProductForDiscount && (
                <div className="modal-overlay" onClick={() => setIsDiscountModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px' }}>
                        <div className="modal-header">
                            <h3>Cài đặt giảm giá</h3>
                            <button className="icon-btn" onClick={() => setIsDiscountModalOpen(false)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ padding: '12px', background: 'var(--bg-base)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <p style={{ margin: 0, fontWeight: 500 }}>{selectedProductForDiscount.name}</p>
                                <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '14px' }}>Giá hiện tại: {selectedProductForDiscount.price}</p>
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Giảm giá theo %</label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <input type="number" className="checkout-input" placeholder="Ví dụ: 20" defaultValue={selectedProductForDiscount.discount?.replace('%', '')} />
                                    <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>%</span>
                                </div>
                            </div>
                            
                            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>- HOẶC -</div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Nhập giá khuyến mãi mới (đ)</label>
                                <input type="text" className="checkout-input" placeholder="Nhập giá mới..." />
                            </div>
                        </div>
                        <div className="modal-footer" style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                            <button className="btn btn-secondary" onClick={() => setIsDiscountModalOpen(false)}>Hủy</button>
                            <button className="btn btn-primary" onClick={handleSaveDiscount}>Áp dụng giảm giá</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProducts;
