import React, { useEffect, useState } from "react";
import Card from "./card/card";
import backGround from "../../Pyragon/03.png";
import $ from "jquery";

import "./our-team.css";
const OurTeam = () => {
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
      <div id="main-container-our-team">
            <img class="demo-bg-ourteam" src={backGround} alt="" style={{left : changepos}}/>

        <h1>OUR TEAM</h1>
        <div id="our-team-card-container">
          <Card name="Madelin Gibson" description="CEO and lead Blockchain AGEcrypto startup"/>
          <Card name="Adelin O'Reilly" description="CTO and Senior Developer AGEcrypto startup"/>
          <Card name="Bethany Kertmann" description="Bloackchain App Developer AGEcrypto Startup"/>
          <Card name="Willa Bergstrom" description="Community Managment AGEcrypto Startup"/>
          <Card name="Alice Kiehn" description="Community Managment AGEcrypto Startup"/>
          <Card name="Chase Cronin" description="Bloackchain App Developer AGEcrypto Startup"/>
        </div>
      </div>
  );
};

export default OurTeam;
