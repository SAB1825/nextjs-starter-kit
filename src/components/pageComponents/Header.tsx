"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../themeProvider/themeToggle";
import { SignedOut, SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { isSignedIn } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isSignedIn);
  const pathname = usePathname();

  useEffect(() => {
    setLoggedIn(isSignedIn);
  }, [isSignedIn]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const showDashboardButton = loggedIn && pathname !== "/dashboard";

  return (
    <header>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold">NetWeave</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:bg-gray-100 dark:hover:bg-[#111111] px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {loggedIn ? (
              <>
                {showDashboardButton && (
                  <Link href="/dashboard" className="hidden md:inline-block">
                    <Button className="bg-blue-600 dark:bg-[#111111] text-white hover:bg-blue-700">
                      Dashboard
                    </Button>
                  </Link>
                )}
                <UserButton />
              </>
            ) : (
              <SignedOut>
                <SignInButton>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              style={{ zIndex: 100 }}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:bg-gray-100 dark:hover:bg-[#111111] px-3 py-2 rounded-md text-lg font-medium my-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {loggedIn && showDashboardButton && (
              <Link
                href="/dashboard"
                className="mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="bg-blue-600 dark:bg-[#111111] text-white hover:bg-blue-700">
                  Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
