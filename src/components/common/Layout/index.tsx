import Footer from '@/components/common/Layout/Footer';
import Header from '@/components/common/Layout/Header';
import * as React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
