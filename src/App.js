import "./App.css";
import Layout from "./components/layout/Layout";
import CompanyName from "./components/pages/CompanyName";
import Foundation from "./components/pages/Foundation";
import MainProducts from "./components/pages/MainProducts";
import MachineList from "./components/pages/MachineList";

let productItems = [
  "Standtdard parts(mold part and stampoing part)",
  "Percision Mold, Dies, Casting spare Part",
  "Injection Mold & Die Stamping Maker",
  "Plastic Injection",
];

let machinesList = [
  {
    name: "PROFILE GRINDING M/C",
    IND: "ON 2022",
    KOR: 3,
    img: "img/machine.png",
  },
  {
    name: "CNC MILLING M/C",
    IND: 2,
    KOR: 3,
    img: "img/machine.png",
  },
  {
    name: "WEDM M/C",
    IND: 2,
    KOR: 10,
    img: "img/machine.png",
  },
  {
    name: "EDM M/C",
    IND: 6,
    KOR: 5,
    img: "img/machine.png",
  },
  {
    name: "SURFACE GRINDING M/C",
    IND: 8,
    KOR: 7,
    img: "img/machine.png",
  },
  {
    name: "EXTERNAL GRINDING M/C",
    IND: 2,
    KOR: 5,
    img: "img/machine.png",
  },
  {
    name: "INTERNAL GRINDING M/C",
    IND: 1,
    KOR: 5,
    img: "img/machine.png",
  },
  {
    name: "CNC LATHE M/C",
    IND: "ON 2022",
    KOR: 15,
    img: "img/machine.png",
  },
  {
    name: "LASER MARKING",
    IND: 1,
    KOR: 2,
    img: "img/machine.png",
  },
  {
    name: "SUPERDRILL",
    IND: 1,
    KOR: 2,
    img: "img/machine.png",
  },
  {
    name: "INJECTION PLASTIC M/C",
    IND: 12,
    KOR: 10,
    img: "img/machine.png",
  },
];

function App() {
  return (
    <Layout>
      <CompanyName />
      <Foundation />
      <MainProducts productItems={productItems} />
      <MachineList machinesList={machinesList} />
    </Layout>
  );
}

export default App;
