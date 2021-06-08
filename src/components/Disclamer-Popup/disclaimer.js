import React from "react";
import "./disclaimer.css";
const Disclaimer = () => {
  return (
      <div className="container">
        <div className="heading-disclamer">
          <h1>Disclaimer</h1>
        </div>
        <div className="para">
          <p className="para1">
            Trading cryptocurrencies carries a{" "}
            <span className="para-blue">high level of risk,</span>
            and may not be suitable for all investors.
            <span className="para-blue">
              Before deciding to trade cryptocurrency
            </span>{" "}
            you should carefully consider your investment objectives, level of
            experience, and risk appetite. The possibility exists that you could
            sustain a loss of some or all of your initial investment and
            therefore you should not invest money that you cannot afford to
            lose. ICO's, IEO's, STO’s and any other form of offering will not
            guarantee a return on your investment.
          </p>
          <p className="para1 para-blue">
            You should be aware of all the risks associated with cryptocurrency
            trading, and seek advice from an independent financial advisor
          </p>
          <p className="para1">
            Any opinions, news, research, analyses, prices, or other information
            contained on this website is provided as general market commentary,
            and does not constitute investment advice. The Hoditoken.net and its
            affiliates will not accept liability for any loss or damage,
            including without limitation to, any loss of profit, which may arise
            directly or indirectly from use of or reliance on such information.
            All opinions expressed on this site are owned by the respective
            writer and should never be considered as advice in any form.
          </p>
          <p className="para1">
            The Hoditoken.net and its affiliates makes no representation or
            warranties as to the accuracy and or timelines of the information
            contained herein. A qualified professional should be consulted
            before making any financial decisions.
          </p>
        </div>
        <div>
          <input type="Checkbox"></input>I understand and accept that i will
          trade/invest HODL at my own risks
        </div>
        <button id="disclamer-btn">Confirm</button>
      </div>
  );
};

export default Disclaimer;
