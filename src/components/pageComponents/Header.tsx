"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../themeProvider/themeToggle";
import { SignedOut, SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const { isSignedIn } = useAuth(); // Use the Clerk hook to get auth state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isSignedIn);
  useEffect(() => {
    setLoggedIn(isSignedIn);
  }, [isSignedIn]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold">NetWeave</h1>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
            </div>
          </div>
          <div className="hidden md:flex items-center justify-between gap-6">
            <ThemeToggle />
            {loggedIn && (
              <>
                <Link href="/dashboard">
                  <Button className="ml-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Dashboard
                  </Button>
                </Link>
                <UserButton />
              </>
            )}
            <SignedOut>
              <SignInButton>
                <Button className="ml-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:bg-gray-100 dark:hover:bg-[#111111] block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-[#111111]">
            <div className="flex items-center px-5">
              <ThemeToggle />
              {loggedIn && (
              <>
                <Link href="/dashboard">
                  <Button className="ml-4 mr-5 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Dashboard
                  </Button>
                </Link>
                <UserButton />
              </>
            )}
            <SignedOut>
              <SignInButton>
                <Button className="ml-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
