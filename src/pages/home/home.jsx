import { useEffect } from "react";
import "./home.css";
import Document from "../../components/Document/Document";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import OurPartner from "../../components/OurPartner/OurPartner";
import OurTeam from "../../components/out-team/our-team";
import Pyracoin from "../../components/pyracoin/Pyracoin";
import Roadmap from "../../components/roadmap/roadmap";
import Section1 from "../../components/section-1/Section1";
import Tokennomics from "../../components/tokenomics/Tokennomics";
import Work from "../../components/work/work";

function HomeComponent() {
  return (
    <div className="App">
      <NavBar />
      <div className="section-wrapper">
        <Section1 />
      </div>
      <div id="img-back-app">
        <Tokennomics />

        <Pyracoin />
      </div>

      <div id="img-back-app2">
        <Roadmap />

        <Work />
      </div>

      <OurTeam />
      <Document />
      <OurPartner />
      <Footer />
      
    </div>
  );
}

export default HomeComponent;
