import React from "react";
import "./News.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import PDFViewer from "pdf-viewer-reactjs";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import main from "./Capture.png";
import main2 from "./2.jpeg";
import main3 from "./birthday.png";
import main4 from "./4.jpeg";
import axios from "axios";

const getDate = (date) => {
  const dateObj = new Date(date);
  const options = { month: "long", year: "numeric", day: "numeric" };
  const dateString = dateObj.toLocaleString("en-US", options);

  return dateString;
};

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/posts/");
        setNews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="newss01">
      <div className="card-container_out911">
        <div className="card_out911 ">
          <div className="card-body911">
            <h2 className="card-title_out911">
              News & Articles
              <br />
              <div className="card-description_out911">
                <br />
                To Get More Updates on the Activities, Read Here...
              </div>
            </h2>
          </div>
        </div>
      </div>

      <section className="main-card--cointainer911">
        {news.map((news) => (
          <div className="card-container911" key={news.id}>
            <div className="card911 ">
              <div className="card-body911">
                <div className="share911">
                  <BsShare size={20} />
                </div>
                <div className="card-title911"> {news.title}</div>
              </div>
              <div className="img911">
                <img src={news.post_image} alt="" />
              </div>
              <div className="read911">
                <a
                  href="https://drive.google.com/file/d/1qbFPAVYMUIhOW-elUW3-6-7GPURgSYd_/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="recentcontent023"> Read More<CgMailForward style={{marginLeft:"8px"}}/></p>
                </a>
              </div>
              <div className="date911">{getDate(news.created_at)}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="main-card--cointainer-head911">
        <div className="card-title-last1911"> Recent Posts </div>
      </section>
      <section className="main-card--cointainer-bottom911">
        <div className="card-container-last911">
          <div className="card-last911 ">
            <div className="card-body-last911">
              <div className="recentnews09">
                <div className="img-last911">
                  {" "}
                  <img src={main} alt="" />
                </div>
              </div>
              <div className="recentreadmore09">
                <div className="spreadmessage09">
                  <p className="recentcontent01">
                    {" "}
                    Let’s spread the message of peace
                  </p>
                  <p className="recentcontent02">
                    <a
                      href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container-last911">
        <div className="card-last911 ">
          <div className="card-body-last911">
            <div className="recentnews09">
              <div className="img-last911">
                {" "}
                <img src={main2} alt="" />
              </div>
            </div>
            <div className="recentreadmore09">
              <div className="spreadmessage09">
                <p className="recentcontent01">
                  {" "}
                  Let’s spread the message of peace
                </p>
                <p className="recentcontent02">
                  <a
                    href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container-last911">
          <div className="card-last911 ">
            <div className="card-body-last911">
              <div className="recentnews09">
                <div className="img-last911">
                  {" "}
                  <img src={main3} alt="" />
                </div>
              </div>
              <div className="recentreadmore09">
                <div className="spreadmessage09">
                  <p className="recentcontent01">
                    {" "}
                    Let’s spread the message of peace
                  </p>
                  <p className="recentcontent02">
                    <a
                      href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container-last911">
          <div className="card-last911 ">
            <div className="card-body-last911">
              <div className="recentnews09">
                <div className="img-last911">
                  {" "}
                  <img src={main4} alt="" />
                </div>
              </div>
              <div className="recentreadmore09">
                <div className="spreadmessage09">
                  <p className="recentcontent01">
                    {" "}
                    Let’s spread the message of peace
                  </p>
                  <p className="recentcontent02">
                    <a
                      href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="main-card--cointainer-head911">
        <div className="card-title-last1911"> Top News </div>
      </section>
      <section className="main-card--cointainer-bottom911">
      <div className="card-container-last911">
      <div className="card-last911 ">
        <div className="card-body-last911">
          <div className="recentnews09">
            <div className="img-last911">
              {" "}
              <img src={main4} alt="" />
            </div>
          </div>
          <div className="recentreadmore09">
            <div className="spreadmessage09">
              <p className="recentcontent01">
                {" "}
                Let’s spread the message of peace
              </p>
              <p className="recentcontent02">
                <a
                  href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="card-container-last911">
          <div className="card-last911 ">
            <div className="card-body-last911">
              <div className="recentnews09">
                <div className="img-last911">
                  {" "}
                  <img src={main3} alt="" />
                </div>
              </div>
              <div className="recentreadmore09">
                <div className="spreadmessage09">
                  <p className="recentcontent01">
                    {" "}
                    Let’s spread the message of peace
                  </p>
                  <p className="recentcontent02">
                    <a
                      href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container-last911">
          <div className="card-last911 ">
            <div className="card-body-last911">
              <div className="recentnews09">
                <div className="img-last911">
                  {" "}
                  <img src={main2} alt="" />
                </div>
              </div>
              <div className="recentreadmore09">
                <div className="spreadmessage09">
                  <p className="recentcontent01">
                    {" "}
                    Let’s spread the message of peace
                  </p>
                  <p className="recentcontent02">
                    <a
                      href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container-last911">
          <div className="card-last911 ">
            <div className="card-body-last911">
              <div className="recentnews09">
                <div className="img-last911">
                  {" "}
                  <img src={main} alt="" />
                </div>
              </div>
              <div className="recentreadmore09">
                <div className="spreadmessage09">
                  <p className="recentcontent01">
                    {" "}
                    Let’s spread the message of peace
                  </p>
                  <p className="recentcontent02">
                    <a
                      href="https://drive.google.com/file/d/1x94KS63GZISuFB92hjejxMWihfO2jMJB/view?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
