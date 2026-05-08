

const Hero: React.FC = () => {
  return (
    <section className="hero">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="container hero-container">
            <div className="hero-content">
                <div className="badge-pill">
                    <i className="fa-solid fa-shield-halved"></i> 100% Bảo hành 1-đổi-1
                </div>
                <h1>Giải pháp <span className="text-gradient">Tài khoản Premium</span> tối ưu cho bạn</h1>
                <p>Nâng cao hiệu suất công việc với các công cụ AI hàng đầu thế giới. Giao dịch tự động, nhận tài khoản ngay sau 3s.</p>
                <div className="hero-actions">
                    <a href="#products" className="btn btn-primary btn-lg">Khám phá ngay</a>
                    <a href="#" className="btn btn-secondary btn-lg">
                        <i className="fa-solid fa-play"></i> Xem video HDSD
                    </a>
                </div>
                <div className="trust-indicators">
                    <div className="indicator">
                        <i className="fa-solid fa-bolt text-warning"></i> Giao tự động 24/7
                    </div>
                    <div className="indicator">
                        <i className="fa-solid fa-headset text-primary"></i> Hỗ trợ tận tâm
                    </div>
                    <div className="indicator">
                        <i className="fa-solid fa-star text-warning"></i> 10,000+ Khách hàng
                    </div>
                </div>
            </div>
            <div className="hero-visual">
                <img src="/images/hero-abstract.png" alt="Premium 3D abstract shapes" className="hero-image floating" />
                <div className="glass-panel floating-delay">
                    <div className="panel-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="panel-body">
                        <div className="status-indicator">
                            <i className="fa-solid fa-circle-check text-success"></i> Hệ thống đang chạy
                        </div>
                        <div className="mock-line line-1"></div>
                        <div className="mock-line line-2"></div>
                        <div className="mock-line line-3"></div>
                        <div className="mock-chart"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
