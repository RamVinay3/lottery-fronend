// src/app/layout.js
'use client';  // Add this at the top to specify that this is a Client Component

import { usePathname } from 'next/navigation';
import BottomNav from './_Components/BottomNav';
import './globals.css'; // Include any global styles here

export default function Layout({ children }) {
  const pathname = usePathname();
  
  // List of routes where you don't want the BottomNav
  const noNavPages = ['/profile', '/home', '/event-history'];

  // Check if the current route is one of the excluded pages
  const shouldShowNav = noNavPages.includes(pathname);

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        {shouldShowNav && <BottomNav />}  {/* Only show BottomNav if not on excluded pages */}
      </body>
    </html>
  );
}
