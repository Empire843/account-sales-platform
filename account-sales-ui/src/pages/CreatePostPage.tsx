import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostPage: React.FC = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Chia sẻ');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send data to backend here
        alert('Gửi bài viết thành công! Bài viết đang chờ admin kiểm duyệt.');
        navigate('/blog/my-posts');
    };

    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '2.5rem' }}>Viết bài mới</h1>
                    <button className="btn btn-secondary" onClick={() => navigate('/blog')}>
                        <i className="fa-solid fa-arrow-left"></i> Quay lại
                    </button>
                </div>

                <div className="card" style={{ background: 'var(--bg-surface)', padding: '30px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Tiêu đề bài viết <span style={{ color: 'var(--danger-color)' }}>*</span></label>
                            <input 
                                type="text" 
                                required 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Nhập tiêu đề hấp dẫn..." 
                                style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-base)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', outline: 'none' }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Chuyên mục <span style={{ color: 'var(--danger-color)' }}>*</span></label>
                            <select 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-base)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', outline: 'none' }}
                            >
                                <option>Chia sẻ</option>
                                <option>Hướng dẫn</option>
                                <option>Cảnh báo</option>
                                <option>Đánh giá</option>
                                <option>Công cụ</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Nội dung bài viết <span style={{ color: 'var(--danger-color)' }}>*</span></label>
                            {/* Editor Toolbar Mockup */}
                            <div style={{ border: '1px solid var(--border-color)', borderBottom: 'none', borderRadius: 'var(--radius-md) var(--radius-md) 0 0', padding: '10px 16px', background: 'rgba(0,0,0,0.02)', display: 'flex', gap: '12px', color: 'var(--text-secondary)' }}>
                                <i className="fa-solid fa-bold" style={{ cursor: 'pointer' }}></i>
                                <i className="fa-solid fa-italic" style={{ cursor: 'pointer' }}></i>
                                <i className="fa-solid fa-underline" style={{ cursor: 'pointer' }}></i>
                                <div style={{ width: '1px', background: 'var(--border-color)', margin: '0 4px' }}></div>
                                <i className="fa-solid fa-list-ul" style={{ cursor: 'pointer' }}></i>
                                <i className="fa-solid fa-list-ol" style={{ cursor: 'pointer' }}></i>
                                <div style={{ width: '1px', background: 'var(--border-color)', margin: '0 4px' }}></div>
                                <i className="fa-solid fa-link" style={{ cursor: 'pointer' }}></i>
                                <i className="fa-regular fa-image" style={{ cursor: 'pointer' }}></i>
                                <i className="fa-solid fa-code" style={{ cursor: 'pointer' }}></i>
                            </div>
                            <textarea 
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Viết nội dung của bạn tại đây (Hỗ trợ Markdown)..."
                                style={{ width: '100%', minHeight: '400px', padding: '16px', background: 'var(--bg-base)', border: '1px solid var(--border-color)', borderRadius: '0 0 var(--radius-md) var(--radius-md)', color: 'var(--text-primary)', resize: 'vertical', fontFamily: 'inherit', outline: 'none', lineHeight: '1.6' }}
                            ></textarea>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate('/blog')}>Hủy bỏ</button>
                            <button type="button" className="btn btn-secondary">
                                <i className="fa-solid fa-floppy-disk"></i> Lưu nháp
                            </button>
                            <button type="submit" className="btn btn-primary">
                                <i className="fa-regular fa-paper-plane"></i> Gửi duyệt
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePostPage;
