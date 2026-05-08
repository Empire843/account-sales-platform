import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [likes, setLikes] = useState(124);
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        { id: 1, user: 'Minh T.', avatar: 'M', time: '2 giờ trước', text: 'Bài viết rất hữu ích, cảm ơn bạn đã chia sẻ!' },
        { id: 2, user: 'Hoàng Anh', avatar: 'H', time: '5 giờ trước', text: 'Cho mình hỏi thêm về cách cấu hình bước 3 với ạ?' }
    ]);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;
        
        const newComment = {
            id: Date.now(),
            user: 'Bạn',
            avatar: 'B',
            time: 'Vừa xong',
            text: comment
        };
        setComments([newComment, ...comments]);
        setComment('');
    };

    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                {/* Breadcrumb */}
                <div style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                    <Link to="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        <i className="fa-solid fa-arrow-left"></i> Quay lại Blog
                    </Link>
                </div>

                {/* Article Header */}
                <div style={{ marginBottom: '40px' }}>
                    <div className="status-badge success" style={{ display: 'inline-block', marginBottom: '16px' }}>Hướng dẫn</div>
                    <h1 style={{ fontSize: '2.5rem', lineHeight: '1.4', marginBottom: '20px' }}>
                        Hướng dẫn tối ưu tốc độ mạng khi dùng proxy để sử dụng ChatGPT Plus
                    </h1>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                A
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Admin Trần</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>08/05/2026 • 5 phút đọc</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)' }}>
                            <span title="Lượt xem"><i className="fa-regular fa-eye"></i> 1,234</span>
                            <span title="Lượt thích"><i className="fa-regular fa-heart"></i> {likes}</span>
                            <span title="Bình luận"><i className="fa-regular fa-comment"></i> {comments.length}</span>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '50px' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Chào các bạn, trong quá trình sử dụng ChatGPT Plus hay các dịch vụ AI khác đôi khi chúng ta gặp tình trạng mạng chậm, request bị timeout. Bài viết này sẽ hướng dẫn các bạn cách tối ưu tốc độ khi sử dụng Proxy.
                    </p>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '16px' }}>1. Tại sao cần dùng Proxy?</h3>
                    <p style={{ marginBottom: '20px' }}>
                        Một số nền tảng chặn IP từ Việt Nam hoặc giới hạn tốc độ nếu phát hiện truy cập bất thường. Việc dùng Proxy giúp bạn có một IP sạch, kết nối ổn định hơn.
                    </p>
                    
                    <div style={{ background: 'var(--bg-base)', padding: '20px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-color)', marginBottom: '20px' }}>
                        <strong>Lưu ý:</strong> Nên chọn các loại Proxy Residential hoặc Datacenter IPv4 chất lượng cao để tránh bị khóa tài khoản oan.
                    </div>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '16px' }}>2. Hướng dẫn cấu hình</h3>
                    <p style={{ marginBottom: '20px' }}>
                        Dưới đây là các bước cơ bản để thiết lập. Bạn có thể sử dụng các extension như Proxy SwitchyOmega trên Chrome.
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '8px' }}>Tải và cài đặt Proxy SwitchyOmega</li>
                        <li style={{ marginBottom: '8px' }}>Tạo một Profile mới với loại giao thức là HTTP/HTTPS hoặc SOCKS5</li>
                        <li style={{ marginBottom: '8px' }}>Nhập thông tin IP, Port, Username, Password</li>
                        <li style={{ marginBottom: '8px' }}>Lưu cấu hình và bật Profile vừa tạo</li>
                    </ul>

                    <p style={{ marginBottom: '20px' }}>
                        Chúc các bạn thành công! Nếu có thắc mắc gì hãy để lại bình luận bên dưới nhé.
                    </p>
                </div>

                {/* Article Actions */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '20px 0', marginBottom: '50px' }}>
                    <button 
                        onClick={handleLike}
                        className={`btn ${isLiked ? 'btn-primary' : 'btn-secondary'}`} 
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 24px' }}
                    >
                        <i className={`${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart`}></i> 
                        {isLiked ? 'Đã thích' : 'Thích bài viết'} ({likes})
                    </button>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Chia sẻ:</span>
                        <button className="btn-icon-outline" style={{ width: '40px', height: '40px', borderRadius: '50%' }}><i className="fa-brands fa-facebook-f"></i></button>
                        <button className="btn-icon-outline" style={{ width: '40px', height: '40px', borderRadius: '50%' }}><i className="fa-brands fa-twitter"></i></button>
                        <button className="btn-icon-outline" style={{ width: '40px', height: '40px', borderRadius: '50%' }}><i className="fa-solid fa-link"></i></button>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="comments-section">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Bình luận ({comments.length})</h3>
                    
                    {/* Comment Form */}
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                            B
                        </div>
                        <form onSubmit={handleCommentSubmit} style={{ flex: 1 }}>
                            <textarea 
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Viết bình luận của bạn..." 
                                style={{ width: '100%', minHeight: '80px', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-base)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical', marginBottom: '12px', fontFamily: 'inherit' }}
                            ></textarea>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" className="btn btn-primary" disabled={!comment.trim()}>
                                    <i className="fa-regular fa-paper-plane"></i> Gửi bình luận
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Comments List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {comments.map(c => (
                            <div key={c.id} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                                    {c.avatar}
                                </div>
                                <div style={{ flex: 1, background: 'var(--bg-surface)', padding: '16px', borderRadius: '0 var(--radius-md) var(--radius-md) var(--radius-md)', border: '1px solid var(--border-color)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontWeight: 600 }}>{c.user}</span>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c.time}</span>
                                    </div>
                                    <p style={{ margin: 0, lineHeight: '1.5' }}>{c.text}</p>
                                    <div style={{ marginTop: '12px', display: 'flex', gap: '16px', fontSize: '0.9rem' }}>
                                        <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}><i className="fa-regular fa-thumbs-up"></i> Hữu ích</button>
                                        <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}><i className="fa-regular fa-comment"></i> Phản hồi</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostDetailPage;
