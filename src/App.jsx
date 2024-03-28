
import AllProjects from "./Pages/AllProjects";
import Footer from "./Pages/Footer";
import LandPage from "./Pages/LandPage";
import SummaryPage from "./Pages/SummaryPage";
import SkillsPage from "./Pages/SkillsPage";
import './App.scss';
import ContactPage from "./Pages/ContactPage";
import { ThemeProvider } from './ThemeProvider';


function App() {

  return (
       <ThemeProvider>
    <div className="body">
    <div>
    <LandPage />
    </div>
     <div className="div-body">
     <SummaryPage/>
     <SkillsPage/>
   <AllProjects/>
   <ContactPage/>
     </div>

    <Footer/>

    
    </div>
    </ThemeProvider>
  );
}

export default App;
