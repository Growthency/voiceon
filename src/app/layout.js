import "./globals.css"; // CSS import thik thaka chai
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from 'react-hot-toast'; // Hot Toast import korlam

export const metadata = {
  title: "VoiceOn - World Class AI Voice Platform",
  description: "Next Generation Text to Speech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {/* Toaster setup: Eta notify korbe user-ke */}
        <Toaster 
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#1e293b',
              borderRadius: '24px',
              padding: '16px 24px',
              fontWeight: 'bold',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
            },
            success: {
              iconTheme: {
                primary: '#FF8FAF', // Amader primary color
                secondary: '#fff',
              },
            },
          }}
        />
        
        <ProgressBar />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}