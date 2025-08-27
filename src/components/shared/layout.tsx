import React from 'react';
import Header from '../Header';
import { Footer } from '../footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header curpage="home" />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};