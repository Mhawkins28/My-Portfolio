import Nav from "./components/Nav";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Resume from "./pages/ResumePage/ResumePage";
import ContactMe from "./pages/ContactMePage/ContactMePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </>
    </Router>
  );
}

export default App;