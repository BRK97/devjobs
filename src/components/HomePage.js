import {IoEarthSharp,IoFingerPrintSharp,IoAirplane,IoAnalyticsOutline, IoLeafSharp, IoQrCodeSharp, IoLogoApple} from 'react-icons/io5'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {FcGlobe, FcCandleSticks} from 'react-icons/fc'
import { IconContext } from "react-icons";
import devjobs_android  from "../assets/devjobs_android.png"
import devjobs_apple  from "../assets/devjobs_apple.png"


const HomePage = () => {
    return ( 
        <div className="homepage">
            <div className="first-slide">
                <section className="left">
                    <h2><span>Devjobs</span> is where the work starts</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate dolorum vitae dolores nesciunt totam magni quas.</p>
                    <button id="btn-one">Sign in</button>
                    <button id="btn-two">Sign up</button>
                </section>
                <section className="right">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX17060864.jpg" alt="" />
                </section>
            </div>
            <div className="second-slide">
                <span>New</span>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="third-slide">
                <h2>SERVICES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="services-cards">
                    <div className="card-one, service-card">
                    {/* <IconContext.Provider value={{color:"teal",className: "global-class-name"}}><IoEarthSharp size ={60}/></IconContext.Provider> */}
                    <FcGlobe size ={60}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="card-two, service-card">
                    <IconContext.Provider value={{color:"peru",className: "global-class-name"}}><IoFingerPrintSharp size ={60}/></IconContext.Provider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="card-three, service-card">
                    <IconContext.Provider value={{color:"slateblue",className: "global-class-name"}}><IoAirplane size ={60}/></IconContext.Provider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="card-four, service-card">
                    {/* <IconContext.Provider value={{color:"lightgreen",className: "global-class-name"}}><IoAnalyticsOutline size ={60}/></IconContext.Provider> */}
                    <FcCandleSticks size={60}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="card-five, service-card">
                    <IconContext.Provider value={{color:"green",className: "global-class-name"}}><IoLeafSharp size ={60}/></IconContext.Provider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="card-six, service-card">
                    <IconContext.Provider value={{color:"black",className: "global-class-name"}}><IoQrCodeSharp size ={60}/></IconContext.Provider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                </div>
            </div>
            <div className="fourth-slide">
                <h2>Devjobs Mobile App</h2>
                <div className="hardware">
                    <a href="https://www.apple.com/app-store/">
                        <div className="apple">
                            <h3>iPhone, iPad and <IoLogoApple />Watch</h3>
                            <img src={devjobs_apple} alt="" />
                        </div>
                    </a>
                    <a href="https://play.google.com/store/">
                    <div className="android">
                        <h3>Android</h3>
                        <img src={devjobs_android} alt="" />
                    </div>
                    </a>
                    
                </div>
            </div>
            <div className="fifth-slide">
                <div className="above-wrapper">
                    <div class="wrapper">
                        <div class="static-txt">More then</div>
                            <ul class="dynamic-txts">
                                <li><span>95,000 Companies</span></li>
                                <li><span>26 Countries</span></li>
                                <li><span>750K job offers</span></li>
                                <li><span>23M Users</span></li>
                            </ul>
                        </div>
                        <h1>Clients say</h1>
                   <div className="testimonials">
                        <div className="testimonial">
                            <div className="box-top">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAihZKmzl6nKK9K9EqvZfRJz7lFkkJIArQZQ&usqp=CAU" alt="" />
                                <p>
                                    Person name
                                    <br />
                                    <span>
                                    @PersonName
                                    </span>
                                </p>
                                <IconContext.Provider value={{color:'#f8d130',className: "global-class-name"}}><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/></IconContext.Provider>
                            </div>
                            <div className="box-bottom">
                                lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="box-top">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAihZKmzl6nKK9K9EqvZfRJz7lFkkJIArQZQ&usqp=CAU" alt="" />
                                <p>
                                    Person name
                                    <br />
                                    <span>
                                    @PersonName
                                    </span>
                                </p>
                                <IconContext.Provider value={{color:'#f8d130',className: "global-class-name"}}><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiOutlineStar size={24}/></IconContext.Provider>
                            </div>
                            <div className="box-bottom">
                                lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="box-top">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAihZKmzl6nKK9K9EqvZfRJz7lFkkJIArQZQ&usqp=CAU" alt="" />
                                <p>
                                    Person name
                                    <br />
                                    <span>
                                    @PersonName
                                    </span>
                                </p>
                                <IconContext.Provider value={{color:'#f8d130',className: "global-class-name"}}><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/></IconContext.Provider>
                            </div>
                            <div className="box-bottom">
                                lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="box-top">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAihZKmzl6nKK9K9EqvZfRJz7lFkkJIArQZQ&usqp=CAU" alt="" />
                                <p>
                                    Person name
                                    <br />
                                    <span>
                                    @PersonName
                                    </span>
                                </p>
                                <IconContext.Provider value={{color:'#f8d130',className: "global-class-name"}}><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiOutlineStar size={24}/></IconContext.Provider>
                            </div>
                            <div className="box-bottom">
                                lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,lorem ipsum dolor sit am Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                   </div>
                </div>
            </div>
         </div>
     );
}
 
export default HomePage;