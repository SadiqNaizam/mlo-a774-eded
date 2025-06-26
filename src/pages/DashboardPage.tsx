import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User as UserIcon } from 'lucide-react';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  // Mock user data, assuming it would be fetched from context or a store in a real app
  const user = {
    name: 'Demo User',
    email: 'demo@swiftlogin.com',
  };

  const handleLogout = () => {
    // In a real app, this would clear the auth token and user state
    console.log('User logging out...');
    navigate('/'); // Redirect to the login page as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back, {user.name}!</CardTitle>
            <CardDescription>
              You have successfully logged in. This is your personal dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`https://avatar.vercel.sh/${user.email}.png`} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              From here, you can manage your account, view your profile, or explore other features of the application.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Link to="/profile">
              <Button variant="outline">
                <UserIcon className="mr-2 h-4 w-4" />
                View Profile
              </Button>
            </Link>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;