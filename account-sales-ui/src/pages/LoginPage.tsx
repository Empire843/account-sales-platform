import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', name: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/register
    navigate('/');
  };

  return (
    <section className="page-section login-page">
      <div className="container">
        <div className="login-wrapper">
          <div className="login-card glass-panel-static">
            <div className="login-header">
              <div className="login-logo">
                <i className="fa-solid fa-bolt"></i>
                <span>ProAccounts</span>
              </div>
              <h2>{isRegister ? 'Tạo tài khoản' : 'Đăng nhập'}</h2>
              <p>{isRegister ? 'Đăng ký để bắt đầu mua sắm' : 'Chào mừng bạn quay trở lại'}</p>
            </div>

            <form onSubmit={handleSubmit}>
              {isRegister && (
                <div className="form-group">
                  <label htmlFor="register-name">Họ và tên</label>
                  <div className="input-icon-wrapper">
                    <i className="fa-solid fa-user"></i>
                    <input id="register-name" type="text" name="name" placeholder="Nguyễn Văn A" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <div className="input-icon-wrapper">
                  <i className="fa-solid fa-envelope"></i>
                  <input id="login-email" type="email" name="email" placeholder="email@example.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Mật khẩu</label>
                <div className="input-icon-wrapper">
                  <i className="fa-solid fa-lock"></i>
                  <input id="login-password" type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
                </div>
              </div>
              {isRegister && (
                <div className="form-group">
                  <label htmlFor="register-confirm">Xác nhận mật khẩu</label>
                  <div className="input-icon-wrapper">
                    <i className="fa-solid fa-lock"></i>
                    <input id="register-confirm" type="password" name="confirmPassword" placeholder="••••••••" value={form.confirmPassword} onChange={handleChange} required />
                  </div>
                </div>
              )}
              {!isRegister && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" /> Ghi nhớ đăng nhập
                  </label>
                  <a href="#" className="forgot-link">Quên mật khẩu?</a>
                </div>
              )}
              <button type="submit" className="btn btn-primary btn-lg w-100">
                <i className={`fa-solid ${isRegister ? 'fa-user-plus' : 'fa-right-to-bracket'}`}></i>
                {isRegister ? ' Đăng ký' : ' Đăng nhập'}
              </button>
            </form>

            <div className="login-divider"><span>hoặc</span></div>

            <div className="social-login">
              <button className="btn btn-social google"><i className="fa-brands fa-google"></i> Google</button>
              <button className="btn btn-social facebook"><i className="fa-brands fa-facebook"></i> Facebook</button>
            </div>

            <div className="login-footer">
              {isRegister ? (
                <p>Đã có tài khoản? <button className="link-btn" onClick={() => setIsRegister(false)}>Đăng nhập</button></p>
              ) : (
                <p>Chưa có tài khoản? <button className="link-btn" onClick={() => setIsRegister(true)}>Đăng ký ngay</button></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
