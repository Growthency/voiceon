"use client";
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Dashboard-er kono page-e thakle Navbar/Footer hide hobe
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <>
      {/* ProgressBar ebong ScrollToTop shob page-e thakbe */}
      <ProgressBar />
      
      {!isDashboard && <Navbar />}
      
      <main>{children}</main>
      
      <ScrollToTop />

      {!isDashboard && <Footer />}
    </>
  );
}