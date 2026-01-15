// Importação de todos os componentes modulares
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Problem from './Problem/Problem';
import Stats from './Stats/Stats';
import BeforeAfter from './BeforeAfter/BeforeAfter';
import Features from './Features/Features';
import HowItWorks from './HowItWorks/HowItWorks';
import DashboardPreview from './DashboardPreview/DashboardPreview';
import Automation from './Automation/Automation';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';

// Importação dos estilos de cada seção
import './Header/Header.css';
import './Hero/Hero.css';
import './Problem/Problem.css';
import './Stats/Stats.css';
import './BeforeAfter/BeforeAfter.css';
import './Features/Features.css';
import './HowItWorks/HowItWorks.css';
import './DashboardPreview/DashboardPreview.css';
import './Automation/Automation.css';
import './Testimonials/Testimonials.css';
import './Footer/Footer.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      
      <main>
        {/* Seção Principal */}
        <Hero />
        
        {/* Seção de Conscientização */}
        <Problem />
        
        {/* Seção de Prova Social e Dados */}
        <Stats />
        
        {/* Comparativo de Valor */}
        <BeforeAfter />
        
        {/* Listagem de Funcionalidades */}
        <Features />
        
        {/* Passo a Passo */}
        <HowItWorks />
        
        {/* Demonstração do Produto */}
        <DashboardPreview />
        <Automation />
        
        {/* Prova Social (Depoimentos) */}
        <Testimonials />

      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;