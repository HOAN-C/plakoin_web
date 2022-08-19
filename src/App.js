import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        {/* <Route path="/intro" element={<IntroPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
