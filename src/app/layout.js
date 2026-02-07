import "./globals.css";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from 'react-hot-toast';
import LayoutWrapper from "@/components/LayoutWrapper"; // Amra nicher step-e eta banabo

export const metadata = {
  title: "VoiceOn - World Class AI Voice Platform",
  description: "Next Generation Text to Speech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-[#F8FAFC]">
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
                primary: '#FF8FAF',
                secondary: '#fff',
              },
            },
          }}
        />
        
        <ProgressBar />
        
        {/* LayoutWrapper check korbe Navbar/Footer dekhabe kina */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        <ScrollToTop />
      </body>
    </html>
  );
}