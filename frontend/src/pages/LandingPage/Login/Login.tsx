import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page-container">
      {/* Botão para voltar à Landing Page */}
      <button 
        className="back-button" 
        onClick={() => navigate('/')}
      >
        ← Voltar para o site
      </button>

      <div className="login-content">
        <div className="login-branding">
          <div className="logo">
            <span className="logo-text" style={{ fontWeight: '800', letterSpacing: '-0.5px' }}>
              PRAESO
            </span>
          </div>
          <h1>Consciência e controle</h1>
          <p>
            Acesse sua conta para gerenciar a previsibilidade da sua agenda e 
            garantir compromissos que se cumprem.
          </p>
        </div>

        <div className="clerk-form-wrapper">
          <SignIn 
            routing="path" 
            path="/login" 
            signUpUrl="/cadastro"
            // Redireciona para o dashboard após o login
            forceRedirectUrl="/dashboard" 
            appearance={{
              elements: {
                formButtonPrimary: 'btn-clerk-custom', // Você pode estilizar no CSS
                card: 'clerk-card-clean'
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;