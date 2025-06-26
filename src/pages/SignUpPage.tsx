import React from 'react';
import BrandLogo from '@/components/BrandLogo'; // Custom component
import SignUpForm from '@/components/SignUpForm'; // Custom component

const SignUpPage: React.FC = () => {
  console.log('SignUpPage loaded');

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="flex flex-col items-center space-y-6 w-full">
        <BrandLogo />
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUpPage;