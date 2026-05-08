import React, { useState } from 'react';

const ManageUsers: React.FC = () => {
    const [users] = useState([
        { id: 'USR-001', name: 'Nguyễn Văn A', email: 'vana@gmail.com', role: 'Thành viên', joinDate: '01/05/2026', status: 'Hoạt động' },
        { id: 'USR-002', name: 'Trần Thị B', email: 'tranthib@gmail.com', role: 'Thành viên', joinDate: '02/05/2026', status: 'Hoạt động' },
        { id: 'USR-003', name: 'Lê Minh C', email: 'leminhc@gmail.com', role: 'Cộng tác viên', joinDate: '15/04/2026', status: 'Khóa' },
        { id: 'USR-004', name: 'Admin', email: 'admin@proaccounts.com', role: 'Quản trị viên', joinDate: '01/01/2026', status: 'Hoạt động' },
    ]);

    const getStatusClass = (status: string) => {
        switch(status) {
            case 'Hoạt động': return 'success';
            case 'Khóa': return 'danger';
            default: return '';
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quản lý Người dùng</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Quản lý tài khoản, phân quyền và trạng thái người dùng.</p>
                </div>
                <button className="btn btn-primary">
                    <i className="fa-solid fa-plus"></i> Thêm người dùng
                </button>
            </div>

            <div className="admin-table-container">
                <div className="admin-table-header" style={{ display: 'flex', gap: '16px' }}>
                    <div className="search-box" style={{ background: 'var(--bg-base)', width: '300px' }}>
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm người dùng..." style={{ width: '100%' }} />
                    </div>
                    <select className="btn btn-secondary" style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
                        <option>Tất cả vai trò</option>
                        <option>Thành viên</option>
                        <option>Cộng tác viên</option>
                        <option>Quản trị viên</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Mã ND</th>
                            <th>Tên người dùng</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Ngày tham gia</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div className="author-avatar" style={{ width: '32px', height: '32px', fontSize: '0.8rem' }}>
                                        {user.name.charAt(0)}
                                    </div>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.joinDate}</td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(user.status)}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-btns">
                                        <button className="action-btn" title="Phân quyền"><i className="fa-solid fa-user-shield"></i></button>
                                        <button className="action-btn" title="Chỉnh sửa"><i className="fa-solid fa-pen"></i></button>
                                        <button className="action-btn delete" title={user.status === 'Hoạt động' ? 'Khóa tài khoản' : 'Mở khóa tài khoản'}>
                                            <i className={`fa-solid ${user.status === 'Hoạt động' ? 'fa-lock' : 'fa-unlock'}`}></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Hiển thị 1-4 trên tổng số 4 người dùng</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn btn-secondary" disabled>Trước</button>
                        <button className="btn btn-secondary" disabled>Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
