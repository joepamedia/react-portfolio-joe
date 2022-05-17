import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Coding from "./pages/Coding";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* routes */}
          <Route exact path="/react-portfolio-joe" element={<Home />} />
          <Route path="/react-portfolio-joe/photos" element={<Photos />} />
          <Route path="/react-portfolio-joe/videos" element={<Videos />} />
          <Route path="/react-portfolio-joe/coding" element={<Coding />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
