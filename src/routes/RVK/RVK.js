import "./RVK.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img from "./img.png";
import L1 from "./L1.png";
import L2 from "./L2.png";
import L3 from "./L3.png";
import { CgMailForward } from 'react-icons/cg';
import React, { useEffect, useState } from "react";

const First = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const handleClick = () => {
    window.open("https://www.anjan.tv/");
  };
  const handleClick1 = () => {
    window.open("https://www.premrawat.com/");
  };
  const handleClick2 = () => {
    window.open("https://www.rvkproducts.com/");
  };
  return (
    <div className="maincontmargin456">
      <div className="card-container_out456">
        <div className="card_out456 ">
          <div className="card-body456">
            <div>
              <h2 className="card-title_out456">
                Raj Vidya Kender
                <br />
                <div className="card-description_out456">
                  <br />
                  Supports the vision that peace is possible in everybody’s life
                </div>
              </h2>

            </div>
          </div>
        </div>
      </div>

      <section className="main-card--cointainer456">
        <div className="card-container1456">
          <div className="card1456 ">
            <div className="img1456">
              <p>
                <span>Raj Vidya Kender</span> is a non-profit registered
                charitable organization. Its objective is presenting the Message
                of Peace of Prem Rawat and undertaking humanitarian activities
                to bring harmony in life. It organizes live events with Prem
                Rawat and video events related to his message.
                <br /> <br />
                His message is – Peace is Possible for everyone and that peace
                is a fundamental need of every human being. The organization is
                dedicated to helping people explore human potential, the
                enjoyment of being alive, and experiencing peace. Raj Vidya
                Kender in its endeavor to improve the quality of human life
                offers many humanitarian services, including Free Eye clinics
                and Food for People in remote areas. It also supports other
                organizations having similar charitable, social and
                philanthropic goals.
              </p>
            </div>
          </div>
        </div>

        <div className="card-container2456">
          <div className="card2456 ">
            <div className="img2456">
              <img src={img1} alt="img1456" />
            </div>
          </div>
        </div>

        <div className="card-container3456">
          <div className="card3456 ">
            <div className="img3456">
              <img src={img2} alt="img2456" />
            </div>
          </div>
        </div>
        <div className="card-container4456">
          <div className="card4456 ">
            <div className="img4456">
              <p>
                <span>For the people by the people</span>
                <br />
                Raj Vidya Kender shares and supports the vision that peace is
                possible in everybody’s life. This can happen only when each
                individual takes personal responsibility and discovers personal
                peace. Its activities are supported by voluntary contributions
                of individuals who appreciate this message.
                <br />
                <br />
                <span>Helping you discover personal peace</span>
                <br />
                Raj Vidya Kender invites Prem Rawat to address people interested
                in his message of Self-discovery and Self-knowledge. His
                addresses are very much appreciated and over 50 million people
                have benefited from them. The number of attendees often exceeds
                3 00,000 at events addressed by Prem Rawat. Prem Rawat offers
                and presents a practical way to focus within to enjoy the
                experience of peace inside.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <p className="last456">
          <span>Peace Education Program-From Darkness into Light</span>
          <br />
          Raj Vidya Kender also regularly organizes events in jails across the
          country. His message has helped many prisoners to revert back to the
          normal life of a law-abiding citizen.
        </p>
      </div>
      <div className="break456"></div>
      <div className="quick456">Quick Links</div>

      <section className="main-card--cointainer11456">
        <div className="card-container11456">
          <div className="card11456 ">
            <div className="card-body11456">
              <div className="imageD456">
                <img src={L1} alt="img" />
              </div>
              <div className="card-title11456">
                {" "}
                Anjan TV is a revolutionary general entertainment channel
                conceptualized to see inside the heart of Humanity and offer
                oodles of unlimited entertainment, be it be of mind or soul.{" "}
              </div>
              <button className="button456" onClick={handleClick} >Know More<CgMailForward style={{marginLeft:"7px"}}/></button>
            </div>
          </div>
        </div>

        <div className="card-container11456">
          <div className="card11456 ">
            <div className="card-body11456">
              <div className="imageD2456">
                <img src={L2} alt="img" />
              </div>
              <div className="card-title114561">
                {" "}
                The official website of Prem Rawat and his work promoting peace,
                well-being, self-knowledge and understanding.{" "}

              </div>
              <button className="button456" onClick={handleClick1}>Know More<CgMailForward style={{marginLeft:"7px"}}/></button>
            </div>
          </div>
        </div>

        <div className="card-container11456">
          <div className="card11456 ">
            <div className="card-body11456">
              <div className="imageD2456">
                <img src={L3} alt="img" />
              </div>
              <div className="card-title11456">
                {" "}
                RVK Products operates as an e-commerce platform facilitating the acquisition of Inspirational Video DVDs, Bhajan CDs, and other publication items including books, magazines, and journals.{" "}

              </div>
              <button className="button456" onClick={handleClick2}>Know More<CgMailForward style={{marginLeft:"7px"}}/></button>
            </div>
          </div>
        </div>
      </section>
      <div className="break456"></div>

    </div>
  );
};

export default First;
