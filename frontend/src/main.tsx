
import './globals.css'
import './landing-page.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  // Isso vai aparecer no console se o .env estiver errado
  console.error("Erro: VITE_CLERK_PUBLISHABLE_KEY não encontrada!");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Se a chave for undefined aqui, o erro de Missing ClerkProvider acontece */}
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    ) : (
      <div style={{ padding: "20px", color: "red" }}>
        Configure a chave do Clerk no arquivo .env e reinicie o servidor.
      </div>
    )}
  </StrictMode>,
)