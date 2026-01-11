import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/LandingPage/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal da Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Rota da página de Login que criamos com Clerk */}
        <Route path="/login/*" element={<Login />} />

        {/* Você pode adicionar a rota de cadastro aqui também quando criar o Cadastro.tsx */}
        <Route path="/cadastro/*" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;