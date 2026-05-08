import React from 'react';
import '../index.css';
import { GlobalProvider } from '../components/providers/GlobalProvider';

export const metadata = {
  title: 'ProAccounts - Mua Bán Tài Khoản Premium',
  description: 'Nền tảng mua bán tài khoản số an toàn, bảo hành full time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
