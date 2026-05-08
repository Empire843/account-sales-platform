import React, { useEffect } from 'react';

interface CheckoutModalProps {
  product: any;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose }) => {
  // Simulate active class animation logic after mount
  useEffect(() => {
    // We assume the parent handles the "active" rendering, 
    // but if we used CSS opacity transitions, we'd add an active class here.
    // For now, React conditionally rendering it is fine.
  }, []);

  if (!product) return null;

  return (
    <div className="modal-overlay active" id="checkout-modal">
        <div className="modal-content glass-panel">
            <button className="close-modal" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
            <div className="modal-header">
                <h2>Thanh toán</h2>
                <p>Quét mã QR bằng ứng dụng ngân hàng</p>
            </div>
            <div className="modal-body">
                <div className="qr-container">
                    <div className="qr-placeholder">
                        <i className="fa-solid fa-qrcode"></i>
                    </div>
                    <div className="payment-amount">{product.price}</div>
                    <div className="payment-memo">Nội dung: <strong>PAY PRO{product.id}</strong></div>
                </div>
                <div className="payment-steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-text">Mở ứng dụng ngân hàng và quét mã QR</div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-text">Kiểm tra đúng số tiền và nội dung chuyển khoản</div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-text">Hệ thống tự động duyệt trong 5 giây sau khi nhận tiền</div>
                    </div>
                </div>
                <div className="payment-status waiting">
                    <i className="fa-solid fa-circle-notch fa-spin"></i> Đang chờ thanh toán...
                </div>
            </div>
        </div>
    </div>
  );
};

export default CheckoutModal;
