import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import { FiUnlock } from "react-icons/fi";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const navigate = useNavigate();

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

  const [isCheckedYes, setIsCheckedYes] = useState(false);
  const [isCheckedNo, setIsCheckedNo] = useState(false);

  const handleCheckboxYesChange = (event) => {
    setIsCheckedYes(event.target.checked);
    setIsCheckedNo(false);
  };

  const handleCheckboxNoChange = (event) => {
    setIsCheckedNo(event.target.checked);
    setIsCheckedYes(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Change = (event) => {
    if (isChecked2) {
      setIsChecked2(false);
    }
    setIsChecked1(event.target.checked);
  };

  const handleCheckbox2Change = (event) => {
    if (isChecked1) {
      setIsChecked1(false);
    }
    setIsChecked2(event.target.checked);
  };

  return (
    <div className="newss313">
      <div className="backcont">
        <form >
          <div className="donationhead01">
            Update Information
            <br />
          </div>
          <div className="thin-line01"></div>

          <section className="main-card--cointainer-bottom91131">
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31">Name</div>
                    <div>
                      <input
                        type="text"
                        className="datainp"
                        placeholder="Enter Name"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Age</div>
                    <div>
                      <input
                        type="number"
                        className="datainp"
                        placeholder="Enter Your Age"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> DOB</div>
                    <div>
                      <input
                        type="date"
                        className="datainp"
                        placeholder="DD/MM/YYYY"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Email</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Email here"
                        className="datainp"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Phone Number</div>
                    <div>
                      <input
                        type="number"
                        placeholder="Enter Phone number"
                        className="datainp"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Address</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter address"
                        className="datainp"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Gender</div>
                    <div>
                    <div className="datainp">
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
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Profile Photo</div>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        className="datainp"
                        placeholder="Enter Your Age"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <div className="lastbutton678">

                <button className="lastbutton01" >

                  <p>Update</p>
                </button>
              </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;
