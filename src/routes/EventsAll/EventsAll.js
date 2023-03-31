import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MultiItemCarousel from "./MultiItemCrousel";
import Galleryrvk from "./eventsrvk.png";
import "./EventsAll.css";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import item from "./item.png";
const Image = styled.img`
  width: 100%;
  height: auto;
  align-items: center;
`;



function Events() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Submit form data to server
  }

  return (
    <div>
      {" "}
      <div className="eventallimage">
        <Image src={Galleryrvk} />
      </div>
      <div className="eventsallhead">
        <div className="headmain01">Events</div>
        <div className="mainhead02">
          Get complete information on exciting events from RVK
        </div>
      </div>
      <section className="main-card--cointainer911321">
        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <NavLink to="bookevent">
                    <div className="join">
                      Join with us <BsArrowRight size={16} />{" "}
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <div className="join">
                    Join with us <BsArrowRight size={16} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <div className="join">
                    Join with us <BsArrowRight size={16} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <div className="join">
                    Join with us <BsArrowRight size={16} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <div className="join">
                    Join with us <BsArrowRight size={16} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <div className="join">
                    Join with us <BsArrowRight size={16} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <div className="join">
                    Join with us <BsArrowRight size={16} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "10px",
                  }}
                />
                <div className="cardd">
                  <div className="c2">
                    <div className="r1">
                      <GoLocation style={{ color: "orange" }} /> Jaipur
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      6:00AM to 8:00AM
                    </div>
                  </div>
                  <div className="name">Aarambh 2022</div>
                  <div className="join">
                    Join with us <BsArrowRight size={16} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="latest">
        <div className="break"></div>
        <MultiItemCarousel />
        <div className="break"></div>
        <MultiItemCarousel />
      </div>
    </div>
  );
}

export default Events;
