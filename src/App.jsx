import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  FormContacto,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./components/Formulario";
import Ingreso from './components/Ingreso';


const AppContent = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);






const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/Registrarse" element={<Formulario />} />
      <Route path="/Contacto" element={<Formulario />} />
      <Route path="/Ingresar" element={<Ingreso />} />
    </Routes>
  </Router>
);

export default App;









