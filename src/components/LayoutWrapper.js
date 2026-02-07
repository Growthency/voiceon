"use client";
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import CursorFollower from "@/components/CursorFollower"; // Cursor component-ta import korlam

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Dashboard-er kono page-e thakle Navbar/Footer hide hobe
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <>
      {/* Magic Cursor Ball - Shob jaygay thakbe */}
      <CursorFollower />

      {/* ProgressBar top-e thakbe */}
      <ProgressBar />
      
      {!isDashboard && <Navbar />}
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <ScrollToTop />

      {!isDashboard && <Footer />}
    </>
  );
}