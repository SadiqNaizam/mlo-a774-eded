import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LayoutDashboard, LogOut, User as UserIcon } from 'lucide-react';
import { BrandLogo } from '@/components/auth/BrandLogo';

const Header: React.FC = () => {
  console.log('Header loaded');

  // In a real app, this state would come from a global context or store (e.g., React Context, Zustand, Redux).
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const mockUser = { name: 'Demo User', email: 'demo@swiftlogin.com' };

  const handleLogout = () => {
    // This would dispatch a logout action.
    setIsAuthenticated(false);
    console.log('User logged out');
  };
  
  // This function is for demonstration purposes to toggle the auth state.
  const toggleAuth = () => setIsAuthenticated(!isAuthenticated);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center gap-4">
          <Link to={isAuthenticated ? "/dashboard" : "/"}>
            <BrandLogo />
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={`https://avatar.vercel.sh/${mockUser.email}.png`} alt={mockUser.name} />
                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{mockUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {mockUser.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2 cursor-pointer">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
                    <UserIcon className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <NavLink to="/">
                {({ isActive }) => (
                   <Button variant={isActive ? 'default' : 'ghost'}>Login</Button>
                )}
              </NavLink>
              <NavLink to="/sign-up">
                 {({ isActive }) => (
                   <Button variant={isActive ? 'default' : 'ghost'}>Sign Up</Button>
                )}
              </NavLink>
            </>
          )}
           {/* Demo button to toggle auth state */}
           <Button variant="outline" size="sm" onClick={toggleAuth} className="ml-4">
            Toggle Auth
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;