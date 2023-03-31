import React, { useState } from "react";
import styled from "styled-components";
import volunteerRvk from "./volunteerRvk.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import "./Volunteer.css";

const Div = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 30px;
  margin-left: 20%;
  color: #da9532;
  padding: 2px 5px;
  margin-top: 7px;
`;

const Textarea632 = styled.textarea`
  width: 75%;
  resize: none;
  height: 50px;
  border: none;
  border-radius: 6px;
  padding: 2px 5px;
  margin-top: 2px;
  margin-left: 20%;
  margin-right: 5%;
  font-size: 14px;
`;

const Input = styled.input`
  width: 75%;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 2px 5px;
  margin-top: 2px;
  margin-left: 20%;
  margin-right: 5%;
  font-size: 14px;
  outline: blue;
  margin-bottom: 15px;
`;
const Input1 = styled.input`
  width: 75%;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 2px 5px;
  margin-top: 2px;
  margin-left: 20%;
  margin-right: 5%;
  font-size: 14px;
  outline: blue;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  align-items: center;
`;
const Button = styled.button`
  padding: 7px 15px;
  margin-top: 24px;
  margin-bottom:35px;
  margin-left: 20%;
  background-color: #da9532;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: orange;
  }
  width: 75%;
  height: 50px;
  border-radius: 25px;
`;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const ContactSectionStyle = styled.div`
  .contactSection__wrapper {
    display: flex;
    gap: 1rem;
    background-color: #f1f1f1;
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 100%;
  }
  .right {
    max-width: 100%;
    padding: 40px 40px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 2rem 2rem 2rem 2rem;
    }
  }
`;

const Detail = styled.div`
  display: flex;
  height: 80px;
  align-item: center;
  justify-content: center;
  color: black;
`;

const Div0 = styled.div`
  padding: 0px 70px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-right: 10px;
  &:hover {
    background-color: orange;
  }
`;

const Div1 = styled.div`
  color: #da9532;
`;
const Div5 = styled.div`
  color: #da9532;
`;

const Div2 = styled.div`
  font-size: 15px;
`;

const Div3 = styled.div`
  font-size: 15px;
  color: grey;
`;
const Div4 = styled.div`
  margin-right: 15%;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.1em;
  color:black;
  word-spacing:0.8px;
`;
const Label = styled.label`
  margin-left: 20%;
  font-weight: 500;
  font-size: 16px;
`;

function Volunteer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    // Submit form data to server
  }

  return (
    <div>
    <div className="eventallimage87">
    <Image src={volunteerRvk} />
  </div>

  <ContactSectionStyle>
        <div className="container967">
          <div className="contactSection__wrapper">
            <div className="left">
              <br />
              <Div>Join Us as a Volunteer</Div>
              <Label>Name</Label>
              <br />
              <Input1
                type="text"
                id="name"
                placeholder="Enter Your Name"
                required
              />
              <br />
              <Label>Age</Label>
              <br />
              <Input1
                type="number"
                id="age"
                placeholder="Enter Your Age"
                required
              />
              <br />
              <Label>Gender</Label>
              <br />
              <div className="dropdownvol">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="dropdownselect"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <Label>Email</Label>
              <Input type="email" id="email" placeholder="Email" required />
              <br />

              <Label>Mobile no.</Label>
              <Input type="text" id="name" placeholder="Mobile no." required />
              <br />
              <Label>Address</Label>
              <br />
              <textarea
                placeholder="Your Address"
                rows="5"
                className="voladdress"
              />
              <Label>Area of Interest</Label>
              <br />
              <div className="dropdownvol">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="dropdownselect"
                >
                  <option value="">-- Select an option --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <Button type="submit">Submit</Button>
            </div>
            <div className="right">
              <Div4>
                The Foundation is able to carry out its work thanks to the
                contribution of numerous volunteers. These volunteers, who come
                from various countries, include project managers, writers,
                designers, editors, proofreaders, translators, and
                communications experts. They generously offer their time and
                expertise to support the Foundation's mission, while a small
                team of staff members coordinates their efforts. When specific
                roles become available, we post their descriptions on our
                website. We welcome anyone who is interested in these roles to
                request further information.
                <br />
                To learn more about a specific volunteer position, please click
                on the corresponding role listed below. If you have any
                questions, please don't hesitate to reach out to us at
                rvkender@rvk.in, or through our contact page. Simply select
                "Volunteer Opportunities" on the form to direct your inquiry.
                Additionally, if you have any ideas for how you'd like to get
                involved or partner with us, we would love to hear from you.
              </Div4>
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    </div>
  );
}

export default Volunteer;