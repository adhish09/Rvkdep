import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";
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
import axios from '../../services/apiService';

const Image = styled.img`
  width: 100%;
  height: auto;
  align-items: center;
`;

const Div = styled.div`
  padding: 25px;
  color: #d9d9d;
`;


// utility functions
const getTime = (date)=>{

  const dateObj = new Date(date);
  const timeString = dateObj.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' });
  
  return timeString

}



const getDate=(date)=>{
  const dateObj = new Date(date);
  const options = { month: 'long', year: 'numeric' };
  const dateString = dateObj.toLocaleString('en-US', options);
  
  return dateString;

}

function Events() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [events, setEvents] = useState({
    upcoming_events:[],
    old_events:[]
  });

  function handleSubmit(event) {
    event.preventDefault();
    // Submit form data to server
  }


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events/all_events/');
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();


  }, []);

  return (
    <div>
      {" "}
      <Div>
        <Image src={Galleryrvk} />
      </Div>
      <div className="eventsallhead">
      <div className="headmain01">Check our upcoming events</div>
      <div className="mainhead02">Join us for exciting upcoming events - Here is the schedule of the programs.</div>
</div>
      <section className="main-card--cointainer911321">
        <div className="card911321 ">
          <div className="img911321">
            <div
              style={{ textAlign: "center", padding: "0px", margin: "20px" }}
            >
              {events.upcoming_events.map((item)=>(
              <div className="eve">
                <img
                  className="multi__image001"
                  src={item.event_image}
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
                      <GoLocation style={{ color: "orange" }} /> {item.location}
                    </div>
                    <div className="r2">
                      <AiOutlineClockCircle
                        size={13}
                        style={{ color: "orange" }}
                      />
                      {getTime(item.start)} to {getTime(item.end)}
                    </div>
                  </div>
                  <div className="name">{item.name}</div>
                  <Link className="join" to={`/event/${item.id}/register`}>
                    Join with us <BsArrowRight size={16} />{" "}
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="latest">
        <div className="break"></div>
        <MultiItemCarousel old_events={events.old_events}/>
   
      </div>
    </div>
  );
}

export default Events;
