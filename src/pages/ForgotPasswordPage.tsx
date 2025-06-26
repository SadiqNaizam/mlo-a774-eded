import React from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { ForgotPasswordForm } from '@/components/ForgotPasswordForm';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container flex flex-col items-center justify-center py-12">
        <div className="flex flex-col items-center gap-6 w-full">
          <BrandLogo />
          <ForgotPasswordForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;