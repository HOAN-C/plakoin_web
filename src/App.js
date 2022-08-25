import "./App.css";
import Layout from "./components/layout/Layout";
import CompanyName from "./components/pages/CompanyName";
import Foundation from "./components/pages/Foundation";

function App() {
  return (
    <Layout>
      <CompanyName />
      <Foundation />
    </Layout>
  );
}

export default App;
