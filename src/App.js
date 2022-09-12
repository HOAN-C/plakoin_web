import "./App.css";
import Layout from "./components/layout/Layout";
import CompanyName from "./components/pages/CompanyName";
import BriefHistory from "./components/pages/BriefHistory";
import MainProducts from "./components/pages/MainProducts";
import EquipmentStatus from "./components/pages/EquipmentStatus";
import Partners from "./components/pages/Partners";
import ContactUs from "./components/pages/AddressAndContact";
import OrganizationChart from "./components/pages/OrganizationChart";

let mainProducts = [
  {
    name: "Standard parts",
    img: "img/MainProducts/StandardParts.png",
  },
  {
    name: "Precision Mold",
    img: "img/MainProducts/PrecisionMold.jpeg",
  },
  {
    name: "Injection Mold",
    img: "img/MainProducts/InjectionMold.jpg",
  },
  { name: "Plastic Injection", img: "img/MainProducts/PlasticInjection.jpg" },
];

let equipmentStatus = [
  {
    name: "PROFILE GRINDING M/C",
    IND: "ON 2022",
    KOR: 3,
    img: "img/EquipmentStatus/ProfileGrindingMC.jpg",
  },
  {
    name: "CNC MILLING M/C",
    IND: 2,
    KOR: 3,
    img: "img/EquipmentStatus/CNCLatheMC.jpg",
  },
  {
    name: "WEDM M/C",
    IND: 2,
    KOR: 10,
    img: "img/EquipmentStatus/WEDMMC.png",
  },
  {
    name: "EDM M/C",
    IND: 6,
    KOR: 5,
    img: "img/EquipmentStatus/EDMMC.png",
  },
  {
    name: "SURFACE GRINDING M/C",
    IND: 8,
    KOR: 7,
    img: "img/EquipmentStatus/SurfaceGrindingMC.jpg",
  },
  {
    name: "EXTERNAL GRINDING M/C",
    IND: 2,
    KOR: 5,
    img: "img/EquipmentStatus/ExternalGrindingMC.jpg",
  },
  {
    name: "INTERNAL GRINDING M/C",
    IND: 1,
    KOR: 5,
    img: "img/EquipmentStatus/InternalGrindingMC.jpg",
  },
  {
    name: "CNC LATHE M/C",
    IND: "ON 2022",
    KOR: 15,
    img: "img/EquipmentStatus/CNCLatheMC.jpg",
  },
  {
    name: "LASER MARKING",
    IND: 1,
    KOR: 2,
    img: "img/EquipmentStatus/LaserMarking.png",
  },
  {
    name: "SUPERDRILL",
    IND: 1,
    KOR: 2,
    img: "img/EquipmentStatus/SuperDrill.jpg",
  },
  {
    name: "INJECTION PLASTIC M/C",
    IND: 12,
    KOR: 10,
    img: "img/EquipmentStatus/InjectionPlasticMC.jpg",
  },
];

let partners = [
  {
    logo: "img/Partners/ShinseiElectronicsGroup.png",
    name: "SHINSEI DENSHI",
    country: "JAP",
    mainProduct: "OTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "http://www.shinsei-denshi.co.jp/Group_jigyousyo/PT_SDI.html",
  },
  {
    logo: "img/Partners/Panasonic.png",
    name: "PANASONIC",
    country: "JAP",
    mainProduct: "ELECTRICAL PARTS",
    addr: "BOGOR & PASURUAN",
    web: "https://panasonic.net/electricworks/about/global-network/",
  },
  {
    logo: "img/Partners/Omron.png",
    name: "OMRON",
    country: "JAP",
    mainProduct: "ELECTRONICS PARTS",
    addr: "KAWASAN INDUSTRI EJIP",
    web: "https://www.omron.co.id/",
  },
  {
    logo: "img/Partners/Advanex.png",
    name: "ADVANEX PRECISION",
    country: "JAP",
    mainProduct: "OTOMOTIVE PARTS",
    addr: "BEKASI INTERNATIONAL INDUSTRIAL ESTATE",
    web: "https://advanexasia.com/",
  },
  {
    logo: "img/Partners/Matsuo.png",
    name: "MATSUO PRECISION",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI GIIC",
    web: "http://www.matsuo.co.id/index.php",
  },
  {
    logo: "img/Partners/TokaiRika.png",
    name: "TOKAI RIKA",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "http://www.tokai-rika.co.jp/en/company/",
  },
  {
    logo: "img/Partners/Toyodenso.png",
    name: "TOYODENSO",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "https://www.toyo-denso.co.jp/",
  },
  {
    logo: "img/Partners/companyLogo.png",
    name: "NANBU PLASTIC",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI MM 2100",
    web: "#",
  },
  {
    logo: "img/Partners/companyLogo.png",
    name: "ORIENTAL ELECTRONIC",
    country: "KOR",
    mainProduct: "ELECTRONIC PARTS",
    addr: "KAWASAN INDUSTRI HYUNDAI",
    web: "#",
  },
  {
    logo: "img/Partners/Shinsei.jpg",
    name: "GLOBAL SHINSEI",
    country: "JAP",
    mainProduct: "AUTOMOTIVE PARTS",
    addr: "KAWASAN INDUSTRI EJIP",
    web: "https://www.shinsei-shiga.co.jp/english/global/",
  },
  {
    logo: "img/Partners/Hriose.png",
    name: "HIROSE ELECTRIC",
    country: "JAP",
    mainProduct: "ELECTRICAL PARTS",
    addr: "KAWASAN INDUSTRI EJIP",
    web: "https://www.hirose.com/#",
  },
];

let briefHistory = [
  {
    year: 2014,
    content: ["Establish a Company Indonesia PT. PLAKOIN TECHNOLOGY INDONESIA"],
  },
  {
    year: 2015,
    content: [
      "Register PT. Shinsei Denshi Indonesia, PT. Smep Pacific Indonesia",
      "Press Mold and injection Mold special spare part",
    ],
  },
  {
    year: 2018,
    content: [
      "Register PT. Panasonic Gobel Life Solutions, PT.KMK, PT.Advanex Presicion Indonesia, Pt. Matsuo Precision Indonesia, PT.IKPI, PT. TSBDLL",
    ],
  },
  {
    year: 2020,
    content: [
      "Partnership (south korea) Supply Standard partmold and stamping",
      "Register PT. Tokai Rika Indonesia, PT. Hirose Electric Indonesia, PT. Nanbu Plastics Indonesia, PT. KEPI, PT. Global Shinsei Indonesia, PT. Plasess Indonesia, PT. Omron Manufacturing Indonesia, PT. Toyodenso Indonesia, PT. Oriental Electronics Indonesia",
      "New Progress Moldset",
      "Change the name from PT. Micro fabricationTec to Plakoin Technology Indonesia",
    ],
  },
];

function App() {
  return (
    <Layout>
      <section>
        <CompanyName />
        <MainProducts mainProducts={mainProducts} />
        <Partners partners={partners} />
        <EquipmentStatus equipmentStatus={equipmentStatus} />
        <BriefHistory briefHistory={briefHistory} />
        <OrganizationChart />
        <ContactUs />
      </section>
    </Layout>
  );
}

export default App;
