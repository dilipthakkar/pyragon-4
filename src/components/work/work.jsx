import React, { useEffect, useState } from "react";
import "./work.css";
import Etherum from "../../Pyragon/coins/ethereum.png" ;
import Bitcoin from "../../Pyragon/coins/bitcoin.png";
import BitcoinCash from "../../Pyragon/coins/bitcoin-cash.svg";
import Litecoin from "../../Pyragon/coins/litecoin.png";
const Work = () => {
  

  return (
    <div className="work-main-container" id="work-main-container">
      <h1 className="work-heading">HOW IT WORKS</h1>
      <div className="work-second-container">
      <div className="work-para">
        <p>
          Total amount of INT released is 1,000,000,000. No additional token
          releases will take place. If all INT available for sale are not
          purchased. The remaining tokens are destroyed .Token distribution
          takes place 10 days after the token sale is complete.
        </p>
        <div className="box-work">
          <div className="work-box1">
            <h3>Token Symbol</h3>
            <h2>PYRA</h2>
          </div>
          <div className="work-box1">
            <h3>Blockchain</h3>
            <h2>BINANCE, BEP20</h2>
          </div>
          <div className="work-box1">
            <h3>Token Price</h3>
            <h2>0.0001 BNB</h2>
          </div>
          <div className="work-box1">
            <h3>Total Token Supply</h3>
            <h2>1,000,000,000 INT</h2>
          </div>
        </div>
      </div>
      <div className="work-token-container">
        <div>
          <h2>Token calculation</h2>
          <p>
            Use the calculator to better understand conversions from popular
            cryptocurrencies.
          </p>
        </div>
        <div className="work-token-button-group">
          
          <button className="coin-btn"> <img src={Etherum} style={{width : "35px" , height : "35px"}}/> Ethereum</button>
          
          <button className="coin-btn"> <img src={Bitcoin} style={{width : "35px" , height : "35px" , marginRight : "6px"}}/> Bitcoin</button>
          <button className="coin-btn"> <img src={BitcoinCash} style={{width : "32px" , height : "32px" , margin : "2px"}}/> Bitcoin Cash</button>
          <button className="coin-btn"> <img src={Litecoin} style={{width : "35px" , height : "35px"  , marginRight : "6px"}}/> Litecoin</button>
          
        </div>
        <div className="work-token-bottom">
          <div style={{backgroundColor : 'rgba(102, 95, 95 , 0.1)'}}>
          <h5>10000</h5>
          <h5>PYRA</h5>
          
          </div>
          <div>
          <h5>2.58846918</h5>
          <h5>ETH</h5>
        
          </div>
          </div>
      </div>
 
      </div>
    </div>
  );
};

export default Work;
