import React, { useEffect, useRef, useState } from "react";
import calender from "../assets/calendar.png";
import dashboard from "../assets/dashboard.webp";
import myPic from "../assets/myimg.png";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const [activeTab, setActiveTab] = useState("home");
  const home = useRef(null);
  const portfolio = useRef(null);
  const about = useRef(null);
  const tools = useRef(null);
  const contact = useRef(null);

  const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const social = [
    {
      id: 1,
      logo: require("../assets/in.webp"),
      url: "https://www.linkedin.com/in/muhammad-arsalan-53ab0b223/",
    },
    {
      id: 2,
      logo: require("../assets/email.png"),
      url: "mailto:arslanimran411@gmail.com",
    },
    {
      id: 3,
      logo: require("../assets/whatsapp.png"),
      url: "https://wa.me/+12893385598",
    },
  ];

  const toolsArr = [
    { id: 9, logo: require("../assets/html.png"), name: "HTML" },
    { id: 10, logo: require("../assets/css.png"), name: "CSS" },
    { id: 11, logo: require("../assets/boot.png"), name: "BootStrap" },
    { id: 1, logo: require("../assets/React.webp"), name: "React Js" },
    { id: 2, logo: require("../assets/React.webp"), name: "React-Native" },
    { id: 3, logo: require("../assets/javascript.webp"), name: "JavaScript" },
    { id: 4, logo: require("../assets/typescript.webp"), name: "TypeScript" },
    { id: 5, logo: require("../assets/fire.png"), name: "Firebase" },
    { id: 6, logo: require("../assets/node.png"), name: "Node JS" },
    { id: 7, logo: require("../assets/sass.png"), name: "Sass" },
    { id: 8, logo: require("../assets/next.png"), name: "Next JS" },
  ];

  const portfolioArr = [
    {
      id: 1,
      logo: require("../assets/kno.png"),
      name: "KNO",
      weburl: "https://kno.co/",
      androidurl: "https://play.google.com/store/apps/details?id=com.kno.app",
      iosurl: "https://apps.apple.com/us/app/kno-co/id6451420414",
      des: "knō is the ultimate app for easy and secure STI testing, ensuring safe connections with your partners.",
      stack: ["React.js", "React-Native", "Firebase"],
    },
    {
      id: 2,
      logo: require("../assets/ntp1.webp"),
      name: "National Truck Pro",
      weburl: "https://nationaltruckpro.com/",
      androidurl:
        "https://play.google.com/store/apps/details?id=com.nationaltruckpro&pli=1",
      iosurl: "https://apps.apple.com/us/app/national-truck-pro/id6479256085",
      des: "National Truck Pro is the must-have app for truckers, cutting down on breakdown hassles and constant dispatcher calls.",
      stack: ["React.js", "React-Native", "Firebase"],
    },
    {
      id: 3,
      logo: require("../assets/afrotech.webp"),
      name: "AfroTech Connect",
      weburl: "",
      androidurl:
        "https://play.google.com/store/apps/details?id=com.afrotech&hl=en_CA",
      iosurl: "https://apps.apple.com/us/app/afrotech-connect/id6463799977",
      des: "AfroTech Connect is for boosting connections and networking, enhancing your AfroTech Conference experience by integrating you into the community.",
      stack: ["React-Native", "Firebase"],
    },
    {
      id: 7,
      logo: require("../assets/book.webp"),
      name: "BookStreet",
      weburl: "",
      androidurl:
        "https://play.google.com/store/apps/details?id=com.rg.bookstreet&hl=en_CA",
      iosurl: "https://apps.apple.com/it/app/bookstreet/id1667628897",
      stack: ["React-Native", "Socket.io"],
      des: "This app is for buying and selling textbooks among schoolmates",
    },
    {
      id: 3,
      logo: require("../assets/inova.webp"),
      name: "InovaReal",
      weburl: "",
      androidurl:
        "https://play.google.com/store/apps/details?id=com.inovareal.inovarealapp&hl=en",
      iosurl: "https://apps.apple.com/ca/app/inovareal/id6447564981",
      des: "Inovareal is a real estate app that simplifies buying, selling, and renting properties.",
      stack: ["React-Native"],
    },
    {
      id: 3,
      logo: require("../assets/yem.webp"),
      name: "Yemeni House",
      weburl: "",
      androidurl:
        "https://play.google.com/store/apps/details?id=com.yemeni.yh.house&hl=en_CA",
      iosurl: "https://apps.apple.com/us/app/yemeni-house/id1579854563",
      des: "The app delivers Yemeni products to your door, helping Yemenis in the USA stay connected to their culture.",
      stack: ["React-Native"],
    },

    {
      id: 6,
      logo: require("../assets/can.webp"),
      name: "Canulo",
      weburl: "",
      androidurl:
        "https://play.google.com/store/apps/details?id=com.techprime.canulo&hl=en_CA",
      iosurl: "",
      stack: ["React-Native"],
      des: "The Canulo app is for integrating healthcare, improving connections, and streamlining communication within the system",
    },
    {
      id: 7,
      logo: require("../assets/dono.webp"),
      name: "Dono",
      weburl: "https://donoapp.com/",
      androidurl:
        "https://play.google.com/store/apps/details?id=dono.app.com&hl=en",
      iosurl: "",
      stack: ["React.js", "React-Native", "Paypal"],
      des: "Dono is an app designed for donating and connecting with various charities.",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust this threshold as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if (home.current) observer.observe(home.current);

    if (portfolio.current) observer.observe(portfolio.current);
    if (about.current) observer.observe(about.current);
    if (tools.current) observer.observe(tools.current);
    if (contact.current) observer.observe(contact.current);

    return () => {
      if (home.current) observer.unobserve(home.current);

      if (about.current) observer.unobserve(about.current);
      if (tools.current) observer.observe(tools.current);
      if (portfolio.current) observer.unobserve(portfolio.current);

      if (contact.current) observer.unobserve(contact.current);
    };
  }, []);

  return (
    <div>
      <nav className={`nav-bar ${isNavVisible ? "nvv" : ""}`}>
        <div className="nav-container">
          <text className="my-name">Muhammad.</text>
          <ul className={`nav-list ${isNavVisible ? "visible" : "hidden"}`}>
            <div className="list-view">
              <li className="tab-txtresp">
                <a
                  href="#home"
                  className={activeTab === "home" ? "active" : "tab"}
                >
                  Home
                </a>
              </li>

              <li className="tab-txtresp">
                <a
                  href="#about"
                  className={activeTab === "about" ? "active" : "tab"}
                >
                  About
                </a>
              </li>

              <li className="tab-txtresp">
                <a
                  href="#tools"
                  className={activeTab === "tools" ? "active" : "tab"}
                >
                  Tools
                </a>
              </li>

              <li className="tab-txtresp">
                <a
                  href="#portfolio"
                  className={activeTab === "portfolio" ? "active" : "tab"}
                >
                  Portfolio
                </a>
              </li>

              <li className="tab-txtresp">
                <a
                  href="#contact"
                  className={activeTab === "contact" ? "active" : "tab"}
                >
                  Contacts
                </a>
              </li>
            </div>
          </ul>
        </div>

        <button
          onClick={() => setIsNavVisible(!isNavVisible)}
          className="hamburger"
        >
          {arr.map(() => {
            return <div className="divider" />;
          })}
        </button>
      </nav>

      <div>
        <section id="home" ref={home} className="section">
          <div className="top-resp">
            <text className="main-txt">
              Hello,
              <br /> I'm{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>
                {" "}
                Muhammad Arsalan
              </span>{" "}
              <br />
              Front-end Developer
            </text>
            <p className="paragraph">
              I design and develop experiences that make people's lives simpler{" "}
              <br />
              through Web and Mobile apps. I work with React Js & React Native.
            </p>
          </div>
          <img className="my-img" src={myPic} />
        </section>

        <section id="about" ref={about} className="aboutme">
          <div>
            <div className="content-row">
              <h4 className="headerTxt">About</h4>
              <div className="line" />
            </div>
            <h1 className="mainText">ABOUT ME</h1>
          </div>

          <div className="myabout-row">
            <div>
              <h2 className="detailsTxt">Education</h2>

              <div className="about-view">
                <div className="bullet-centered ">
                  <div className="circle" />
                  <div className="verticle-line" />
                  <div className="circle" />
                  <div className="verticle-line" style={{ height: 50 }} />
                </div>

                <div style={{ flexDirection: "column" }}>
                  <div className="right-container">
                    <div>
                      <img className="icon" src={calender} />
                      <span className="year">2018 - 2022</span>
                    </div>

                    <h5 className="degree-txt">
                      Bachelor Science in Computer Sciences(BSCS)
                    </h5>

                    <h5 className="degree-txt1">
                      Lahore Garrison University(LGU)
                    </h5>
                  </div>

                  <div className="right-container" style={{ paddingTop: 50 }}>
                    <div>
                      <img className="icon" src={calender} />
                      <span className="year">2015 - 2017</span>
                    </div>

                    <h5 className="degree-txt">
                      Graduate: College - Computer Science
                    </h5>

                    <h5 className="degree-txt1">CIMS College</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondView">
              <h2 className="detailsTxt">Experience</h2>

              <div className="about-view">
                <div className="bullet-centered ">
                  <div className="circle" />
                  <div className="verticle-line" />
                  <div className="circle" />
                  <div className="verticle-line" style={{ height: 50 }} />
                </div>

                <div style={{ flexDirection: "column" }}>
                  <div className="right-container">
                    <div>
                      <img className="icon" src={calender} />
                      <span className="year">2023 - present</span>
                    </div>

                    <h5 className="degree-txt">
                      React JS & React-Native Developer
                    </h5>

                    <h5 className="degree-txt1">Coder Crew</h5>
                  </div>

                  <div className="right-container" style={{ paddingTop: 60 }}>
                    <div>
                      <img className="icon" src={calender} />
                      <span className="year">2021 - 2023</span>
                    </div>

                    <h5 className="degree-txt">Front-End Developer</h5>

                    <h5 className="degree-txt1">Buildout Solutions</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" ref={tools} className="toolsContainer">
          <div>
            <div className="content-row">
              <h4 className="headerTxt">Tools</h4>
              <div className="line widthLine" />
            </div>
            <h1 className="mainText">My Technologies</h1>
          </div>

          <div className="myContainer">
            <Row className="innerRowContainer">
              {toolsArr.map((item, index) => {
                return (
                  <Col
                    sm={12}
                    lg={3}
                    md={3}
                    style={{
                      padding: 0,
                      margin: 10,
                      width: 170,
                      paddingTop: 10,
                    }}
                  >
                    <div className="connn">
                      <div className="tools-card">
                        <img className="img" src={item.logo} />
                      </div>
                      <h5 className="tool-name">{item?.name}</h5>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </section>

        <section id="portfolio" ref={portfolio} className="portfolioSection">
          <div>
            <div className="content-row">
              <h4 className="headerTxt">Work</h4>
              <div className="portfolioWidth" />
            </div>
            <h1 className="mainText">My Portfolio</h1>
          </div>

          <Row className="workOuterContainer">
            {portfolioArr?.map((item) => {
              return (
                <Col className="workInnerContainer" sm={12} lg={4} md={6}>
                  <img className="workImg" src={item?.logo} />
                  <h5 className="appName">{item?.name}</h5>
                  <h5 className="appDes">{item?.des}</h5>

                  <div className="tagsContainer">
                    {item?.stack?.map((val) => {
                      return <h5 className="tags">{`#${val}`}</h5>;
                    })}
                  </div>

                  <div className="btnView">
                    {item?.androidurl && (
                      <a
                        key={item.id}
                        href={item.androidurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          onClick={() => console.log("jadfbjhd")}
                          className="urlBtn"
                        >
                          Play Store
                        </button>
                      </a>
                    )}
                    {item?.iosurl && (
                      <a
                        key={item.id}
                        href={item.iosurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          onClick={() => console.log("jadfbjhd")}
                          className="urlBtn"
                        >
                          App Store
                        </button>
                      </a>
                    )}
                    {item?.weburl && (
                      <a
                        key={item.id}
                        href={item.weburl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="urlBtn">Visit Site</button>
                      </a>
                    )}
                  </div>
                </Col>
              );
            })}
          </Row>
        </section>

        <section id="contact" ref={contact} className="contactMainContainer">
          <h1 className="full-name">Muhammad Arsalan</h1>
          <h1 className="stack">JavaScript Developer | Front-End Developer</h1>
          <h1 className="number">+1289-338-5598</h1>
          <h1 className="emailTxt">Arslanimran411@gmail.com</h1>
          <div className="circle-row">
            {social?.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle1"
                >
                  <img
                    className={`${item.id === 1 ? "socialImg" : "whatsappImg"}`}
                    src={item.logo}
                    alt={`social-logo-${item.id}`}
                  />
                </a>
                // <div className="circle1">
                //   <img
                //     className={`${item.id === 1 ? "socialImg" : "whatsappImg"}`}
                //     src={item?.logo}
                //   />
                // </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
