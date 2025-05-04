import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Toaster } from "sonner";

<Toaster
  position="top-center"
  toastOptions={{
    className: "animate-slide-in-up fade-in",
    style: {
      animationDuration: "500ms",
    },
  }}
/>

createRoot(document.getElementById("root")!).render(<App />);
