import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="page-section contact-page">
      <div className="container">
        <div className="page-hero">
          <h1>Liên hệ <span className="text-gradient">với chúng tôi</span></h1>
          <p>Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><i className="fa-brands fa-telegram"></i></div>
              <h4>Telegram</h4>
              <p>Phản hồi nhanh nhất, hỗ trợ 24/7</p>
              <a href="#" className="info-link">@proaccount_support <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div className="info-card">
              <div className="info-icon email-icon"><i className="fa-solid fa-envelope"></i></div>
              <h4>Email</h4>
              <p>Gửi yêu cầu chi tiết, phản hồi trong 2h</p>
              <a href="#" className="info-link">support@proaccounts.vn <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div className="info-card">
              <div className="info-icon zalo-icon"><i className="fa-solid fa-comment-dots"></i></div>
              <h4>Zalo</h4>
              <p>Tiện lợi cho người dùng Việt Nam</p>
              <a href="#" className="info-link">0912.345.678 <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div className="info-card">
              <div className="info-icon discord-icon"><i className="fa-brands fa-discord"></i></div>
              <h4>Discord</h4>
              <p>Cộng đồng hỗ trợ lẫn nhau</p>
              <a href="#" className="info-link">Tham gia server <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-card glass-panel-static">
              <h3><i className="fa-solid fa-paper-plane"></i> Gửi tin nhắn</h3>
              {submitted && (
                <div className="success-message">
                  <i className="fa-solid fa-circle-check"></i> Gửi thành công! Chúng tôi sẽ phản hồi sớm.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <input id="name" type="text" name="name" placeholder="Nguyễn Văn A" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="email@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Chủ đề</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">-- Chọn chủ đề --</option>
                    <option value="warranty">Yêu cầu bảo hành</option>
                    <option value="refund">Yêu cầu hoàn tiền</option>
                    <option value="product">Hỏi về sản phẩm</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nội dung</label>
                  <textarea id="message" name="message" rows={5} placeholder="Mô tả chi tiết..." value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  <i className="fa-solid fa-paper-plane"></i> Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
