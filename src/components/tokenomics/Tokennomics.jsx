import React, { useEffect } from "react";
// import Image from "../../assets/bgimg.png";
import Image from "../../Pyragon/Isometric-Tokenomics.png";
import "./tokennomics.css";
import AOS from 'aos';
import "aos/dist/aos.css";
const Tokennomics = () => {
  useEffect(()=>{
    AOS.init();
  
  } , []);
  
  return (
    <div className="token">

      <div id="token-group-1">
      <h1 className="heading">TOKENOMICS</h1>
      <div className="para-token" >
        <p data-aos="fade-zoom-in">
          Each transaction burns 3% of the value and redistributes this to all
          holders The liquidity from the launch has been lacked on DxLocker
          until 2025.
        </p>
        <p data-aos="fade-zoom-in">
          5% of all teades are auto-locked inside liquidity provider on
          PancakeSwap. This means your Paragon token amount will increase
          directly in your wallet as the Paragon total supply decreases!
        </p>
        <p data-aos="fade-zoom-in">
          There is no need for staking or farming on weird websites since the
          reware feature happens directly on-chain!.
        </p>
        <p data-aos="fade-zoom-in"> 
          A total of 1,000,000,000 Pyragon tokens were created at listing and
          since then we have butnt almost 50% of the supply .equibalent to over
          470,000,000 Pyragon and the supply will keep decreasing and the
          partially redistributed to Pyrogon holders
        </p>
      
      </div>
      


      
      </div>
      <div className="token-img">
          <img src={Image} alt="Image"/>
        </div>
    </div>
  );
};

export default Tokennomics;
