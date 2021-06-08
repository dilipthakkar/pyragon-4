import React,{useEffect, useState} from 'react';
import "./Section1.css";
import backGround from "../../Pyragon/03.png";





const Section1 = () => {
    const [changepos , setChangePos] = useState(-200);
    
    useEffect(() => {
        window.addEventListener('scroll' , ()=>{
            setChangePos(window.scrollY + 10);
        })
    }, [])
    
    return (
        <div id="main-container-section1" >
            <div id="img-div" style={{top : changepos<50 ? 200 : -changepos}}></div>
            {/* <div id="img-div-2"></div> */}
            <img class="demo-bg-section1" src={backGround} alt="" />
            <h1>smart contracts in real estate using blockchain technology.</h1>

            <div id="btn-group">
                <button id="btn-group-1">LIVE CHART</button>
            
                <button id="btn-group-2">BUY NOW</button>
            </div>
            <div id="footer">
                <div class="footer-section-container">
                    <button>PRICE</button>
                    <h5>$0.898989</h5>
                </div>

                <div class="footer-section-container">
                    <button>HOLDER</button>
                    <h5>898989</h5>
                </div>

                <div class="footer-section-container">
                    <button>SUPPLY</button>
                    <h5>898989</h5>
                </div>

                <div class="footer-section-container">
                    <button>MARKET CAP</button>
                    <h5>898989</h5>
                </div>
            </div>
        </div>
    )
}

export default Section1
