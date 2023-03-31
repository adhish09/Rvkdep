import React from "react";
import "./BookEvent.css";
import img from "./1.png";
import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import { FiUnlock } from "react-icons/fi";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { MdEventNote } from "react-icons/md";
import { GiPublicSpeaker } from "react-icons/gi";
import { useForm } from "react-hook-form";

const BookEvent = () => {

  const [isDivOpen, setIsDivOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDivOpen(!isDivOpen);
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="newss31">
      <div className="backcont563">
        <div className="detailevent">Event Details </div>
        <div className="donationhead563">
          <section className="main-card--cointainer91170">
            <div className="card-container91170">
              <div className="card91170 ">
                <div className="img91170">
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
            <div className="card-container91170">
              <div className="card91170 ">
                <div className="card-body91170">
                  <div className="card-title91170">Aarambh 2023 </div>
                </div>
                <div className="img91170">
                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <GiPublicSpeaker />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                          Host Organizations
                          <div />
                          <div className="colevent090">Programming Board</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <ImLocation />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                          Location
                          <div />
                          <div className="colevent090">
                            Common Ground, Delhi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <MdEventNote />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                          Begins
                          <div />
                          <div className="colevent090">
                            Monday, April 3,2023 at 5:00PM IST
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <MdEventNote />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                          Ends
                          <div />
                          <div className="colevent090">
                            Monday, April 3,2023 at 7:00PM IST
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bookeventticket" onClick={handleButtonClick}>Book Now</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      {isDivOpen && (
<div>
<div className="break"></div>
   <div className="backcont">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="donationhead01">
            Personal Information
            <br />
          </div>
          <div className="thin-line01"></div>

          <section className="main-card--cointainer-bottom91131">
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> First Name</div>
                    <div>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name && "invalid"
                        } datainp`}
                        {...register("name", {
                          required: "First Name is Required",
                        })}
                        onKeyUp={() => {
                          trigger("name");
                        }}
                        placeholder="Enter First Name"
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Last Name</div>
                    <div>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.namel && "invalid"
                        } datainp`}
                        {...register("namel", {
                          required: "Last Name is Required",
                        })}
                        onKeyUp={() => {
                          trigger("namel");
                        }}
                        placeholder="Enter Last Name"
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.namel && (
                        <small className="text-danger">
                          {errors.namel.message}
                        </small>
                      )}
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
                        className={`form-control ${
                          errors.email && "invalid"
                        } datainp`}
                        {...register("email", {
                          required: "Email is Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("email");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
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
                        className={`form-control ${
                          errors.phone && "invalid"
                        } datainp`}
                        {...register("phone", {
                          required: "Phone is Required",
                          pattern: {
                            value:
                              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: "Invalid phone number",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("phone");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.phone && (
                        <small className="text-danger">
                          {errors.phone.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Smart Card Number</div>
                    <div>
                      <input
                        type="text"
                        className="datainp"
                        placeholder="Enter Smat card number"
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
                        className={`form-control ${
                          errors.address && "invalid"
                        } datainp`}
                        {...register("address", {
                          required: "Address is Required",
                        })}
                        onKeyUp={() => {
                          trigger("address");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.address && (
                        <small className="text-danger">
                          {errors.address.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Pin Code</div>
                    <div>
                      <input
                        type="number"
                        placeholder="Enter your Pin Code"
                        maxLength={6}
                        className={`form-control ${
                          errors.pin && "invalid"
                        } datainp`}
                        {...register("pin", {
                          required: "Pin Code is Required",
                        })}
                        onKeyUp={() => {
                          trigger("pin");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.pin && (
                        <small className="text-danger">
                          {errors.pin.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> City</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your city"
                        className={`form-control ${
                          errors.city && "invalid"
                        } datainp`}
                        {...register("city", { required: "City is Required" })}
                        onKeyUp={() => {
                          trigger("city");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.city && (
                        <small className="text-danger">
                          {errors.city.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> State</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        className={`form-control ${
                          errors.state && "invalid"
                        } datainp`}
                        {...register("state", {
                          required: "State is Required",
                        })}
                        onKeyUp={() => {
                          trigger("state");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.state && (
                        <small className="text-danger">
                          {errors.state.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Country</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your country"
                        className={`form-control ${
                          errors.country && "invalid"
                        } datainp`}
                        {...register("country", {
                          required: "Country is Required",
                        })}
                        onKeyUp={() => {
                          trigger("country");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.country && (
                        <small className="text-danger">
                          {errors.country.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="lastbutton678">
            {" "}
            <button className="lastbutton01" type="submit">
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
      </div>
      )}
    </div>
  );
};

export default BookEvent;
