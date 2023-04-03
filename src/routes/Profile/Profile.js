import React, {useState, useEffect, useContext} from "react";
import { NavLink } from 'react-router-dom';
import "./Profile.css";
import { GoMail } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";
import main from "./download.png";
import { AuthContext } from "../../contexts/AuthContext";
import axios from '../../services/apiService';

function Profile() {
  const [active_user, setActiveUser] = useState({})

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/accounts/'+user.id+"/");
        setActiveUser(response.data);
        console.log(active_user, "user")
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);


  return (
    <div className="profile-cont-main">
      <section className="main-card--cointainer91158">
        <div className="card-container91158">
          <div className="card91158 ">
         <div className="editbutton"><NavLink to="editprofile"><button className="edit099"><AiTwotoneEdit size={25} style={{color:"black"}}/></button></NavLink></div>
            <div className="img911589">
              <img src={user.profile_picture} alt="" />
              <div className="nameprofile">{active_user.name} , {active_user.age}</div>
              <div className="smartcard">
                <p>{active_user.email}</p>
              </div>
              <div className="donationprofile">Detail</div>
              <div className="donation_detail">
                <section className="main-card--cointainer-bottom9113163">
                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Name</div>
                          <div className="data3164">{active_user.name}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Age</div>
                          <div className="data3164">{active_user.age}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">DOB</div>
                          <div className="data3164">{active_user.dob}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Gender</div>
                          <div className="data3164">{active_user.gender}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Email</div>
                          <div className="data3164">{active_user.email}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Mobile</div>
                          <div className="data3164">{active_user.phone_number}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                  <div className="card-last9113163 ">
                    <div className="card-body-last9113163">
                      <div className="details3163">
                        <div className="data3163">Smart Card No</div>
                        <div className="data3164">{active_user.smart_card}</div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Address</div>
                          <div className="data3164">{active_user.address}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container91158_2">
          <div className="card91158 ">
            <div className="img91158">
              <div className="donationprofile">Donation History</div>
              <div className="donation_detail">
                <div className="donhistory1">
                  <div className="donationdetailheadingmain">
                    <div className="donationhead90">ID</div>
                    <div className="donationhead90">Date</div>
                    <div className="donationhead90">Amount</div>
                    <div className="donationhead90">Details</div>
                  </div>

                  <div className="donationscroll">
                    {active_user.donations && active_user.donations.map((donation)=>(
                    <div className="donationdetailheading">
                    <div className="donationhead909">{donation.id}</div>
                    <div className="donationhead909">{donation.created_at}</div>
                    <div className="donationhead909">{donation.amount}</div>
                    <div className="donationhead9099">
                      <u>View Receipt</u>
                    </div>
                    </div>

                    ))}

                  </div>
                </div>
              </div>
              <div className="donationprofile1">Event History</div>
              <div className="donation_detail">
              <div className="donhistory1">
                  <div className="donationdetailheadingmain">
                    <div className="donationhead9012">ID</div>
                    <div className="donationhead9013">Date</div>
                    <div className="donationhead901">Event Name</div>
                    <div className="donationhead901">Location</div>
                    <div className="donationhead9012">Ticket</div>
                  </div>

                  <div className="donationscroll">
                    
                    {active_user.events && active_user.events.map((event)=>(

                      <div className="donationdetailheading">
                      <div className="donationhead90902">{event.id}</div>
                      <div className="donationhead90903">{event.created_at}</div>
                      <div className="donationhead9090">{event.name}</div>
                      <div className="donationhead9090">{event.location}</div>
                      <div className="donationhead909902">
                        <u>View</u>
                      </div>
                      </div>
                    ))}
                   


                  </div>
                </div>
              </div>
              <button className="bookevent">Book Event</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
