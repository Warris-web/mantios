

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Waitlist from "./pages/Waitlist";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;