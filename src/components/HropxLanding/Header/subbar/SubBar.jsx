import React, { useState, useEffect } from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { SubBarContainer } from "./StyledNavbar";
import { Link as ScrollLink  } from "react-scroll";
import { Link } from "react-router-dom";
import "./SubBar.css";
import TopBar from "../topbar/TopBar";
import Marquee from "../marquee/Marquee";
// import downIcon from '../../../../assets/landingImages/ionic-ios-arrow-down.svg'
import { RiArrowDropDownLine } from 'react-icons/ri'
// import AgeGatePopup from "../../../Popups/AgeGatePopup";
// import { useSelector } from "react-redux";
const SubBar = ({ setShow }) => {
  // const history = useHistory();

  // const user = useSelector((state) => state.recruitAuth.userInfo)

  const [navbar, setNavbar] = useState(false);
  const [ setPopup] = useState(false);
  // const [toggle, setToggle] = useState(false);

  const [navbarbackground, setnavbarbackground] = useState(false);

  useEffect(() => {
    changenavColor();
    // adding the event when scroll change background
    window.addEventListener("scroll", changenavColor);
  });

  const changenavColor = () => {
    if (window.scrollY > 15) {
      setnavbarbackground(true);
      setNavbar(true);
    } else {
      setnavbarbackground(false);
      setNavbar(false);
    }
  };

  // const changeBackground = () => {
  //   window.onwheel = e => {
  //     if(e.deltaY >= 0){
  //       // Scrolling Down with mouse
  //       setNavbar(true)
  //     } else {
  //       // Scrolling Up with mouse
  //       setNavbar(false)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   changeBackground()
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeBackground)
  // })
  return (
    <div className="home-page-main-nav-container">
      <Marquee />
      <TopBar setShow={setShow} />
      {/* {user?.gatePopup === false && popup ? (<AgeGatePopup isOpen={popup} onClose={() => { setPopup(false) }} />) : null} */}
      <div className={navbar ? "hporx-header" : "hporx-header-skew "} onClick={() => setPopup(true)} >
        <div className={navbar ? "hporx-header-topbar-skew" : navbarbackground ? "changetopBArbackgournd" : "hporx-header-topbar-normal"} ></div>
        <nav className={navbarbackground ? "nav" : "changebackground  px-8"} id="navbar"  >
          <div className="nav-content bscontainer-fluid">
            <ul className="ruby-menu cursor-pointer">
              <li className="main-li uppercase" >
                <Link className="active" to="HOME" spy={true} smooth={true} duration={500}    > HOME{" "} </Link>
              </li>
              <li className="main-li uppercase">
                <Link to="/e-landing" className="flex items-center">MARKETPLACE <RiArrowDropDownLine className="text-[30px]" /></Link>
                <div className={`show !w-auto ${navbar === true && '-mt-[10px]'}`}>
                  {navbar === true && <div className="bg-white h-[10px]"></div>}
                  <div className="p-3">
                    <div className="row">
                      <div className="col-lg-4 w-full p-2 pl-5 flex items-baseline flex-col ">
                        {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                        <div className="flex flex-col justify-start items-start cursor-pointer">
                          <span>
                            <Link to="/e-landing">Home</Link>
                          </span>
                          <span>
                            <Link to="/fairman-online">Fairman Online</Link>
                          </span>
                          <span>
                            <Link to="/e-dashboard">Vendor Dashboard</Link>
                          </span>
                          <span>
                            <Link to="/stock">Stock</Link>
                          </span>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>


              </li>


              <li className="main-li uppercase ">
                <Link to="/" className="flex items-center">RECRUIT <RiArrowDropDownLine className="text-[30px]" /></Link>
                <div className={`show !w-auto ${navbar === true && '-mt-[10px]'}`}>
                  {navbar === true && <div className="bg-white h-[10px]"></div>}
                  <div className="p-3">
                    <div className="row">
                      <div className="col-lg-4 w-full p-2 pl-5 flex items-baseline flex-col">
                        {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                        <div className="flex flex-col justify-start w-full  items-start cursor-pointer">
                          <span>
                            <Link to="/recruitLanding">Home</Link>
                          </span>
                          <span>
                            <Link to="/recruit">Recruit</Link>
                          </span>
                          <span>
                            <Link to="/signin">Hire Talent</Link>
                          </span>
                        </div>
                      </div>

                    </div>
                    {/* <div className="col-lg-4 border-r border-white p-2 pl-5 flex items-baseline flex-col">
                      <h3 className="text-[20px] font-medium">Items2</h3>
                      <div className="flex flex-col ">
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                      </div>

                     
                    </div>
                    <div className="col-lg-4  p-2 pl-5 flex items-baseline flex-col">
                      <h3 className="text-[20px] font-medium">Items3</h3>
                      <div className="flex flex-col ">
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                     
                    </div> */}

                  </div>
                </div>


                {/* <ul >
                  <li>
                    <Link to="/">2nd Level #1</Link>
                  </li>
                  <li>
                    <Link to="/" >2nd Level #2</Link>
                  </li>
                  <li>
                    <Link to="/" className="flex items-center"> 2nd Level #3 <RiArrowDropRightLine className="text-[40px]" /></Link>
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="fa fa-university" aria-hidden="true" />
                          3rd Level #1
                        </Link>
                        <ul>
                          <li>
                            <Link to="/">4th Level #1</Link>
                          </li>
                          <li>
                            <Link to="/">4th Level #2</Link>
                          </li>
                        </ul>
                        <span className="ruby-dropdown-toggle" />
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-thumbs-up" aria-hidden="true" />
                          3rd Level #2
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-users" aria-hidden="true" />
                          3rd Level #3
                        </Link>
                        <ul>
                          <li>
                            <Link to="/">
                              <i className="fa fa-paper-plane" aria-hidden="true" />
                              4th Level #1
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-print" aria-hidden="true" />
                              4th Level #2
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-shopping-bag" aria-hidden="true" />
                              4th Level #3
                            </Link>
                          </li>
                        </ul>
                        <span className="ruby-dropdown-toggle" />
                      </li>
                    </ul>
                    <span className="ruby-dropdown-toggle" />
                  </li>
                  <li className="ruby-open-to-left">
                    <Link to="/">2nd Level #4</Link>
                    <ul>
                      <li>
                        <Link to="/">3rd Level #1</Link>
                      </li>
                      <li>
                        <Link to="/">3rd Level #2</Link>
                      </li>
                      <li>
                        <Link to="/">3rd Level #3</Link>
                      </li>
                    </ul>
                    <span className="ruby-dropdown-toggle" />
                  </li>
                  <li>
                    <Link to="/">2nd Level #5</Link>
                  </li>
                </ul> */}
                <span className="ruby-dropdown-toggle" />
              </li>
              {/* <li className="main-li uppercase">
                <Link activeClass="active" to="INHALATE" spy={true} smooth={true} duration={500} >  INHALATE  </Link>
              </li> */}
              {/* <li className="main-li uppercase">
                <Link to="/Home" > Recruit Page  </Link>
              </li> */}
              {/* <li className="main-li uppercase">
               
                Recruit Page
                </Link>
              </li> */}
              <li className="main-li uppercase">
                <ScrollLink
                  activeClass="active"
                  to="VAPORIZE"
                  spy="true"
                  ooth="true"
                  offset={-70}
                  duration={500}   >
                  PORTABLES
                </ScrollLink>
              </li>



              <li className="main-li uppercase">
                <ScrollLink
                  activeClass="active"
                  to="CHILLUMS"
                  spy="true"
                  ooth="true"
                  offset={-70}
                  duration={500}   >
                  CHILLUMS
                </ScrollLink>
              </li>
              <li className="main-li uppercase">
                <ScrollLink
                  activeClass="active"
                  to="CULTIVATE"
                  spy="true"
                  ooth="true"
                  offset={-70}
                  duration={500}   >
                  CULTIVATE
                </ScrollLink>

              </li>
              <li className="main-li uppercase">
                <ScrollLink
                  activeClass="active"
                  to="DIAGNOSE"
                  spy="true"
                  ooth="true"
                  offset={-70}
                  duration={500}   >
                  DIAGNOSE
                </ScrollLink>

              </li>
              <li className="main-li uppercase" >
                <ScrollLink
                  activeClass="active"
                  to="PRESCRIBE"
                  spy="true"
                  ooth="true"
                  offset={-70}
                  duration={500}   >
                  PRESCRIBE
                </ScrollLink>

              </li>
              <li className="main-li uppercase">
                <Link to="/" className="flex items-center">PRODUCTS <RiArrowDropDownLine className="text-[30px]" /></Link>
                <div className="shows">
                  <div style={{ color: "red", fontWeight: 700, fontSize: "2rem" }}>Rx</div>
                  <div className="text-white">Merchandise</div>
                </div>
                {/* <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  >
                  <span className="flex items-center "> PRODUCTS <RiArrowDropDownLine className="text-[30px]" /></span>
                </Link> */}

                {/* <ul className="dropdown-product-link" >
                 
                  <li style={{ color: "red", fontWeight: 700, fontSize: "2rem" }}> Rx</li>
                  <li className="text-white">Merchandise</li>
                </ul> */}
              </li>
              {/* <li className="main-li uppercase" >
                <Link to="/ttps://landing-page-ivory-eta.vercel.app/agency">DAS</Link>
              </li> */}
              <li className="main-li uppercase">
                <Link to="/" className="flex items-center">DAS <RiArrowDropDownLine className="text-[30px]" /></Link>
                <div className={`show !w-auto ${navbar === true && '-mt-[10px]'}`}>
                  {navbar === true && <div className="bg-white h-[10px]"></div>}
                  <div className="p-3">
                    <div className="row">
                      <div className="col-lg-4  p-2 pl-5 flex items-baseline flex-col">
                        {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                        <div className="flex flex-col justify-start items-start cursor-pointer">
                          <span>
                            <Link target="_blank" href="https://landing-page-ivory-eta.vercel.app/agency">Home</Link>
                          </span>
                          <span>
                            <Link to="/das">Register</Link>
                          </span>
                          <span>
                            <Link to="/newdashboard">Dashboard</Link>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


              </li>

              <li className="main-li uppercase" >
                <Link to="/locator" spy={true} smooth={true} offset={-70} duration={500} >
                  LOCATE{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SubBar;
