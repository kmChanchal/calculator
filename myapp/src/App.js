import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";


import "./styles/App.scss";
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    </Routes>
    <Footer />
   </Router>
  )
};

export default App;








/*



import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
       
      </Routes>
      
    </Router>
  );
}

export default App;
*/