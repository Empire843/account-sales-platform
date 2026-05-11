import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../admin.css';

const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const handleLogout = () => {
        // Implement logout logic here
        navigate('/');
    };

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <i className="fa-solid fa-bolt"></i>
                        <span>ProAccounts</span>
                    </div>
                </div>
                <nav className="admin-sidebar-nav">
                    <NavLink to="/admin" end className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-chart-pie"></i> Tổng quan
                    </NavLink>
                    <NavLink to="/admin/products" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-box"></i> Sản phẩm
                    </NavLink>
                    <NavLink to="/admin/categories" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-tags"></i> Danh mục
                    </NavLink>
                    <NavLink to="/admin/orders" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-shopping-cart"></i> Đơn hàng
                    </NavLink>
                    <NavLink to="/admin/stats" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-chart-line"></i> Thống kê
                    </NavLink>
                    <NavLink to="/admin/users" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-users"></i> Người dùng
                    </NavLink>
                    <NavLink to="/admin/coupons" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-ticket-alt"></i> Khuyến mãi
                    </NavLink>
                    <NavLink to="/admin/blog" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <i className="fa-solid fa-newspaper"></i> Quản lý Blog
                    </NavLink>
                </nav>
                <div className="admin-sidebar-footer">
                    <button className="btn btn-secondary w-100" onClick={handleLogout}>
                        <i className="fa-solid fa-sign-out-alt"></i> Về trang chủ
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="admin-main">
                {/* Topbar */}
                <header className="admin-topbar">
                    <div className="admin-topbar-left">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="admin-topbar-right">
                        <button className="icon-btn theme-toggle" onClick={toggleTheme}>
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button className="icon-btn">
                            <i className="fa-regular fa-bell"></i>
                            <span className="badge">3</span>
                        </button>
                        <div className="admin-user-profile">
                            <div className="admin-avatar">AD</div>
                            <span style={{ fontWeight: 500 }}>Admin</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
