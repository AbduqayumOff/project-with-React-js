import { BrowserRouter as Router } from "react-router-dom";
import AppPath from "./AppPath/AppPath";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <AppPath />
      <Footer />
    </Router>
  );
}
