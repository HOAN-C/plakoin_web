import "./App.css";
import Layout from "./components/layout/Layout";
import CompanyName from "./components/pages/CompanyName";
import Foundation from "./components/pages/Foundation";
import MainProducts from "./components/pages/MainProducts";
import MachineList from "./components/pages/MachineList";
import Partners from "./components/pages/Partners";

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

let partners = [
  {
    logo: "img/companyLogo.png",
    name: "SHINSEI DENSHI INDONESIA",
    country: "JAP",
    mainProduct: "OTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "http://www.shinsei-denshi.co.jp/Group_jigyousyo/PT_SDI.html",
  },
  {
    logo: "img/companyLogo.png",
    name: "PANASONIC GOBEL LIFE SOLUTIONS",
    country: "JAP",
    mainProduct: "ELECTRICAL PARTS",
    addr: "BOGOR & PASURUAN",
    web: "https://panasonic.net/electricworks/about/global-network/",
  },
  {
    logo: "img/companyLogo.png",
    name: "OMRON MANUFACTURING INDONESIA",
    country: "JAP",
    mainProduct: "ELECTRONICS PARTS",
    addr: "KAWASAN INDUSTRI EJIP",
    web: "https://www.omron.co.id/",
  },
  {
    logo: "img/companyLogo.png",
    name: "ADVANEX PRECISION INDONESIA",
    country: "JAP",
    mainProduct: "OTOMOTIVE PARTS",
    addr: "BEKASI INTERNATIONAL INDUSTRIAL ESTATE",
    web: "#",
  },
  {
    logo: "img/companyLogo.png",
    name: "MATSUO PRECISION INDONESIA",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI GIIC",
    web: "http://www.matsuo.co.id/index.php",
  },
  {
    name: "TOKAI RIKA INDONESIA",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "http://www.tokai-rika.co.jp/en/company/",
  },
  {
    logo: "img/companyLogo.png",
    name: "TOYODENSO INDONESIA",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "https://www.toyo-denso.co.jp/",
  },
  {
    logo: "img/companyLogo.png",
    name: "NANBU PLASTIC INDONESIA",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "#",
  },
  {
    logo: "img/companyLogo.png",
    name: "ORIENTAL ELECTRONIC INDONESIA",
    country: "KOR",
    mainProduct: "ELECTRONIC PARTS",
    addr: "KAWASAN INDUSTRI HYUNDAI",
    web: "#",
  },
  {
    logo: "img/companyLogo.png",
    name: "GLOBAL SHINSEI INDONESIA",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI EJIP",
    web: "https://www.shinsei-shiga.co.jp/english/global/",
  },
  {
    logo: "img/companyLogo.png",
    name: "HIROSE ELECTRIC INDONESIA",
    country: "JAP",
    mainProduct: "ELECTRICAL PARTS",
    addr: "KAWASAN INDUSTRI EJIP",
    web: "https://www.hirose.com/#",
  },
];

function App() {
  return (
    <Layout>
      <CompanyName />
      <Foundation />
      <MainProducts productItems={productItems} />
      <MachineList machinesList={machinesList} />
      <Partners partners={partners} />
    </Layout>
  );
}

export default App;
