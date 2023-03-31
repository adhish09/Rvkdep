import "./PR.css";
import Globe1 from "./Globe3.png";
import Globe2 from "./Globe4.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import React, { useEffect, useState } from "react";

const PR = () => {
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

  return (
    <>
      <div className="card-container_out567">
        <div className="card_out567 ">
          <div className="card-body567">
          <div className="globeprrow">
            <div className="globepr">
              {screenWidth > 900 && <img src={Globe1} style={{width:"500px"}} className="imgglobe567"/>}
            </div>
            <div className="prheadinf09">
              <h2 className="card-title_out567">
                Prem Rawat
                <br />
                <div className="card-description_out567">
                  <br />
                  AMBASSADOR OF PEACE{" "}
                </div>
              </h2>
            </div>
            <div className="globepr2">
              {screenWidth > 900 && <img src={Globe2} className="imgglobe567" style={{width:"500px"}}  />}
            </div></div>
          </div>
        </div>
      </div>

      <section className="main-card--cointainer567">
        <div className="card-container1567">
          <div className="card1567 ">
            <div className="img1567">
              <p>
                <span>Mr. Prem Rawat</span> is a well-known person who spreads a
                message of peace and inner contentment. He travels around the
                world to share his insights with people of different cultures
                and backgrounds.
                <br />
                <br />
                Mr. Rawat has been teaching about the importance of finding
                happiness within ourselves for over 50 years. He believes that
                every person has the potential to experience true happiness and
                contentment, regardless of their circumstances. He gives talks,
                holds seminars and workshops, and has written many books on the
                topic. His teachings are based on practical and simple
                techniques that can be used in daily life to bring more joy and
                fulfillment.
              </p>
            </div>
          </div>
        </div>

        <div className="card-container2567">
          <div className="card2567 ">
            <div className="img2567">
              <img src={img1} alt="img1567" />
            </div>
          </div>
        </div>

        <div className="card-container3567">
          <div className="card3567 ">
            <div className="img3567">
              <img src={img2} alt="img2567" />
            </div>
          </div>
        </div>
        <div className="card-container4567">
          <div className="card4567 ">
            <div className="img4567">
              Mr. Rawat's message of peace and contentment has been appreciated
              by many people around the world, and he has received numerous
              awards and recognition for his work. In summary, Mr. Prem Rawat is
              a well-known teacher who shares simple techniques for finding
              inner peace and contentment. His teachings have helped many people
              around the world to live happier and more fulfilling lives.
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default PR;
