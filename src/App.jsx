
import AllProjects from "./Pages/AllProjects";
import Footer from "./Pages/Footer";
import LandPage from "./Pages/LandPage";
import SummaryPage from "./Pages/SummaryPage";
import SkillsPage from "./Pages/SkillsPage";
import './App.scss';


function App() {
  return (
    <div className="body">
    <div>
    <LandPage />
    </div>
     <div className="div-body">
     <SummaryPage/>
     <SkillsPage/>
   <AllProjects/>
     </div>

    <Footer/>

    
    </div>
  );
}

export default App;
