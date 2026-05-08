import React from 'react';

interface CartItem {
    id: number;
    name: string;
    iconClass: string;
    iconName: string;
    price: string;
    quantity: number;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onRemoveItem: (id: number) => void;
    onUpdateQuantity: (id: number, delta: number) => void;
    onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity, onCheckout }) => {
    // Parse "299.000đ" to 299000
    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    };

    // Format 299000 to "299.000đ"
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    const totalAmount = cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

    return (
        <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>
                        <i className="fa-solid fa-shopping-cart"></i> Giỏ hàng
                        <span className="badge-pill" style={{ marginLeft: '12px', marginBottom: 0, padding: '4px 8px' }}>
                            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                    </h2>
                    <button className="cart-close-btn" onClick={onClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <i className="fa-solid fa-basket-shopping"></i>
                            <p>Giỏ hàng của bạn đang trống</p>
                            <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={onClose}>
                                Tiếp tục mua sắm
                            </button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className={`cart-item-icon ${item.iconClass}`}>
                                    <i className={`fa-solid ${item.iconName}`}></i>
                                </div>
                                <div className="cart-item-details">
                                    <div className="cart-item-title">{item.name}</div>
                                    <div className="cart-item-price">{item.price}</div>
                                    <div className="cart-item-quantity" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                                        <button 
                                            onClick={() => onUpdateQuantity(item.id, -1)}
                                            style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        >
                                            <i className="fa-solid fa-minus" style={{ fontSize: '10px' }}></i>
                                        </button>
                                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item.quantity}</span>
                                        <button 
                                            onClick={() => onUpdateQuantity(item.id, 1)}
                                            style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        >
                                            <i className="fa-solid fa-plus" style={{ fontSize: '10px' }}></i>
                                        </button>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                    <button className="cart-item-remove" onClick={() => onRemoveItem(item.id)} title="Xóa">
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                    <div style={{ fontWeight: 600, color: 'var(--primary-color)' }}>
                                        {formatPrice(parsePrice(item.price) * item.quantity)}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Tổng thanh toán:</span>
                            <span className="cart-total-value">{formatPrice(totalAmount)}</span>
                        </div>
                        <button className="btn btn-primary w-100 btn-lg" onClick={onCheckout}>
                            <i className="fa-solid fa-credit-card"></i> Thanh Toán Ngay
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
