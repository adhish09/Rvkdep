import React from "react";
import "./Donation.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import { FiUnlock } from "react-icons/fi";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import axios  from "axios";

const Donation = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const buttonStyle1 = {
    background: "linear-gradient(95.09deg, rgba(226, 148, 36, 0.83) 0%, rgba(106, 241, 209, 0.61) 100%)",
    padding: "10px",
  };

  const buttonStyle2 = {
    background: "#a0a1a5",
    padding: "10px",
  };



  const [inputValue, setInputValue] = useState("");

  const handleButtonClick1 = () => {
    setInputValue(inputValue === "100" ? "" : "100");
  };
  const handleButtonClick2 = () => {
    setInputValue(inputValue === "200" ? "" : "200");
  };
  const handleButtonClick3 = () => {
    setInputValue(inputValue === "500" ? "" : "500");
  };
  const handleButtonClick4 = () => {
    setInputValue(inputValue === "1000" ? "" : "1000");
  };
  const handleButtonClick5 = () => {
    setInputValue(inputValue === "5000" ? "" : "5000");
  };
  const handleButtonClick6 = () => {
    setInputValue(inputValue === "10000" ? "" : "10000");
  };

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };



  function handleSubmit(event) {
    // Submit form data to server
     axios.post('/api/donations/', {amount:inputValue})
    .then((response) => {
      alert("You have successfully Donated")
    })
    .catch((error) => {
     alert(error)
    });
  }

  return (
    <div className="newss313">
      <div className="card-container_out91131">
        <div className="card_out91131 ">
          <div className="card-body91131">
            <h2 className="card-title_out91131">
              Donation <br />
              <div className="card-description_out91131">
                <br />
                Join the Team of Visionaries with RVK{" "}
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="backcont">
        <section className="main-card--cointainer91131">
          <div className="card-container91131">
            <div className="card91131 ">
              <div className="donatenow">
                <button
                  className="donateo" style={buttonClicked ? buttonStyle2 : buttonStyle1} onClick={handleClick}>

                  Donate Once
                </button>
                <button
                  className="donatem" style={buttonClicked ? buttonStyle1 : buttonStyle2} onClick={handleClick}>

                  Donate Monthly
                </button>
              </div>
              <br />
              <div className="donateamt">
                <button className="donateal" onClick={handleButtonClick1}>
                  ₹ 100
                </button>
                <button className="donatear" onClick={handleButtonClick2}>
                  ₹ 200
                </button>
              </div>
              <br />
              <div className="donateamt">
                <button className="donateal" onClick={handleButtonClick3}>
                  ₹ 500
                </button>
                <button className="donatear" onClick={handleButtonClick4}>
                  ₹ 1000
                </button>
              </div>
              <br />
              <div className="donateamt">
                <button className="donateal" onClick={handleButtonClick5}>
                  ₹ 5000
                </button>
                <button className="donatear" onClick={handleButtonClick6}>
                  ₹ 10000
                </button>
              </div>
              <br />
              <div className="donatenow">
                <input
                  className="donatateinp"
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}

                  placeholder="Type your own amount"
                />
              </div>
              <br />
              <div className="donatenow">

                <div className="submitamt">
                  {inputValue ? (
                    <button className="submitamt" type="submit" onClick={handleSubmit}>
                      <a href="https://test.payumoney.com/url/1IhTHPRcVf8z" className="submitamt">Donate Now</a>
                    </button>
                  ) : (
                    <button className="submitamt01" type="submit" disabled>
                      Donate Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donation;
