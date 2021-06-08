import React, { useEffect, useState } from "react";
import Logo from "../../Pyragon/PyraGon.png";
import "./pyracoin.css";
// import backGround from "../../Pyragon/03.png";
// import backGround from "../../Pyragon/09.png";
import backGround from "../../Pyragon/34.svg";
import $ from "jquery";


const Pyracoin = () => {
  const [changepos, setChangePos] = useState(0);

  useEffect(() => {
    let oldVal = 0;

    $("div").on("wheel", function (e) {
      if (e.originalEvent.deltaX < 0) {
                oldVal += 2;
        setChangePos(oldVal);
      } else if(e.originalEvent.deltaX > 0){
        oldVal -= 2;
            setChangePos(oldVal);
      }
    });
  }, []);

  return (

    <div className="pyracoin pyracoin-animation">
      <img
        class="demo-bg-tokenomics"
        src={backGround}
        alt=""
        style={{ left: changepos }}
      />

      <div id="pyracoin-group-1">
        <div id="pyracoin-left-card">
          <div id="pyracoin-left-card-inner">
            <h3 id="pyracoin-left-card-inner-heading-1">Purchase PYRA coin</h3>
            <h4 style={{ color: "#535195" }}>Avaliable on Pancakeswap</h4>
            <button>BUY NOW</button>

            <div id="share-bar"></div>
          </div>
        </div>
        <div id="pyracoin-right">
          <div>
            <span style={{ color: "#6c5eb2" }}>HOW TO BUY</span>
            <span> PYRA</span>
            <span style={{ color: "#6c5eb2", marginLeft: "10px" }}>COIN</span>
          </div>

          <h3>Pancake swap instruction</h3>

          <p>1. Download the app, Trust Wallet</p>
          <p>2. purcahse BNC or BSC</p>
          <p>
            3. Go to the DApps tab to the bottom, and find pancakeSwap. iphone
            user may need to enable the trust browser, then use the browser tab
            you can also click the BUY NOW button if you are not on mobile.
          </p>
          <p>
            4. Click "Select a currency" and enter this contract address into
            the search field, and you should be able to find PYRG.
          </p>

          <p style={{ marginTop: "25px" }}>
            Before swapping,click on the cog wheel and set the slippage to
            between 11-12%
          </p>

          <p style={{ marginTop: "25px" }}>
            Noew,set the amount you want to purchase th press th swap button
            confirm the transaction and...
          </p>

          <h3
            id="pyracoin-left-lower-heading"
            style={{ color: "rgb(99, 34, 185)" }}
          >
            HODL!
          </h3>
        </div>
      </div>
      <div id="pyracoin-group-2">
        <img src={Logo} style={{ height: "50px", width: "50px" }} />
        <span>PYRAGON</span>
      </div>
    </div>
  );
};

export default Pyracoin;
