@import "tailwindcss";

@theme {
  --color-primary: #FF8FAF;
  --color-secondary: #CCFAD6;
  --animate-bounce-slow: bounce-slow 10s infinite ease-in-out;

  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
}