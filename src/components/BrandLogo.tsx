import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const BrandLogo: React.FC = () => {
  console.log('BrandLogo loaded');
  return (
    <Link to="/" className="inline-flex items-center gap-2 group">
      <div className="bg-primary text-primary-foreground p-2 rounded-md group-hover:bg-primary/90 transition-colors">
        <Rocket className="h-5 w-5" />
      </div>
      <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
        SwiftLogin
      </h1>
    </Link>
  );
};

export default BrandLogo;