import React, { useState } from 'react';

const faqs = [
  {
    q: "Phần mềm/Tool bị lỗi không chạy được thì sao?",
    a: "Bạn liên hệ với chúng tôi qua Telegram hoặc Email kèm mã đơn hàng. Chúng tôi sẽ kiểm tra và hỗ trợ fix lỗi qua Ultraviewer/AnyDesk hoặc cập nhật phiên bản mới trong vòng 30 phút."
  },
  {
    q: "Thời gian bảo hành là bao lâu?",
    a: "Tất cả sản phẩm đều được bảo hành trọn thời gian sử dụng (theo gói License đã mua). Nếu phần mềm dừng hoạt động do update nền tảng (Facebook, Shopee...), bạn sẽ được update miễn phí."
  },
  {
    q: "Tôi có thể được hoàn tiền không?",
    a: "Có. Nếu chúng tôi không thể fix lỗi phần mềm trong vòng 24 giờ kể từ khi bạn báo lỗi, bạn sẽ được hoàn tiền 100% qua phương thức thanh toán ban đầu."
  },
  {
    q: "Quy trình bảo hành như thế nào?",
    a: "Bước 1: Gửi mã đơn hàng + mô tả lỗi qua kênh hỗ trợ. Bước 2: Đội ngũ kỹ thuật xác minh qua Ultraviewer (tối đa 30 phút). Bước 3: Fix lỗi hoặc hoàn tiền."
  },
  {
    q: "Tôi có thể cài đặt phần mềm trên nhiều máy tính không?",
    a: "Điều này phụ thuộc vào gói License bạn mua. Mặc định 1 License Key chỉ sử dụng cho 1 máy tính (1 Hardware ID). Nếu muốn dùng nhiều máy, bạn cần mua gói nâng cấp."
  }
];

const WarrantyPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="page-section warranty-page">
      <div className="container">
        <div className="page-hero">
          <h1>Chính sách <span className="text-gradient">Bảo hành</span></h1>
          <p>Cam kết bảo vệ quyền lợi khách hàng với chính sách bảo hành minh bạch và chuyên nghiệp</p>
        </div>

        {/* Warranty Highlights */}
        <div className="warranty-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Bảo hành Update</h3>
            <p>Phần mềm lỗi do nền tảng đổi thuật toán được fix miễn phí nhanh chóng.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon refund">
              <i className="fa-solid fa-money-bill-transfer"></i>
            </div>
            <h3>Hoàn tiền 100%</h3>
            <p>Không fix được lỗi nghiêm trọng trong 24h? Hoàn tiền đầy đủ, uy tín.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon support">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>Hỗ trợ 24/7</h3>
            <p>Đội ngũ CSKH luôn sẵn sàng qua Telegram, Email và Live Chat.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon time">
              <i className="fa-solid fa-clock"></i>
            </div>
            <h3>Xử lý nhanh 30 phút</h3>
            <p>Thời gian phản hồi trung bình dưới 30 phút trong giờ làm việc.</p>
          </div>
        </div>

        {/* Warranty Process */}
        <div className="warranty-process">
          <h2>Quy trình <span className="text-gradient">Bảo hành</span></h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-circle">1</div>
              <div className="step-content">
                <h4>Gửi yêu cầu</h4>
                <p>Liên hệ đội ngũ hỗ trợ kèm mã đơn hàng và mô tả vấn đề gặp phải.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-circle">2</div>
              <div className="step-content">
                <h4>Xác minh lỗi</h4>
                <p>Kỹ thuật viên sẽ xác minh đơn hàng và kiểm tra lỗi phần mềm trực tiếp (tối đa 30 phút).</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-circle">3</div>
              <div className="step-content">
                <h4>Giải quyết</h4>
                <p>Cập nhật phiên bản mới hoặc hoàn tiền toàn bộ nếu không thể fix lỗi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Câu hỏi <span className="text-gradient">thường gặp</span></h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
                <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyPage;
