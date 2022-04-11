import React from 'react'
import '../Styles/Section1.css'
import Headline from '../images/headline.png'
import { Container, Row, Col } from 'react-bootstrap'
import Bord from '../images/bord2.png'
import Med from '../images/video.mp4'

const Section1 = () => {
    const countDown = () => {
    const countDate = new Date("April 17, 2022 00:00:00").getTime();
    const today = new Date().getTime();
    const difference = countDate - today;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textDay = Math.floor(difference / day);
    const textHour = Math.floor((difference % day) / hour);
    const textMinute = Math.floor((difference % hour) / minute);
    const textSecond = Math.floor((difference % minute) / second);

    document.querySelector(".day").textContent = textDay;
    document.querySelector(".hour").textContent = textHour;
    document.querySelector(".minute").textContent = textMinute;
    document.querySelector(".second").textContent = textSecond;
  };

  setInterval(countDown, 1000);
  return (
    <div className='section1'>
        <Container fluid>
            <Row>
                <Col>
                    <div>
                        <img src={Headline} alt='logo' className = 'img-fluid headline_image' />
                    </div>
                    <div className='section1_main'>
                        <div className='section1_main_1 col-md-7'>
                            <video className="Hsection1_vidoe_div" controls>
                                <source src={Med} type="video/mp4" />
                            </video>
                           <h1>The <span className='underline_text'>Life</span> You Want, The <span className='underline_text'>marraige</span> You Want... The <span className='underline_text'>family</span> That You Want, Is Going To Be <span className='bold_text'>Fueled By The Business You Build...</span></h1>
                        </div>
                        <div className='section1_main_2 col-md-5'>
                            <div className='sm_h3'>
                                <h3>The Next <span className='bold_text'>'ONE FUNNEL AWAY'</span></h3>
                                <h3>Challenge Starts On Apr 18th...</h3>
                            </div>
                            <img src={Bord} alt='logo' className = 'img-fluid bord' />
                           
                            <div className='sm_1'>
                                <div className='sm_2'> 
                                    <div><h1 className='day'> </h1></div>
                                    <p>Days</p>
                                </div>
                                <div className='sm_2'> 
                                    <div><h1 className='hour'></h1></div>
                                    <p>Hours</p>
                                </div>
                                <div className='sm_2'> 
                                    <div><h1 className='minute'></h1></div>
                                    <p>Minutes</p>
                                </div>
                                <div className='sm_2'> 
                                    <div><h1 className='second'></h1></div>
                                    <p>Seconds</p>
                                </div>
                            </div>
                            <div className='sm_h3'>
                                <h3>Registration Ends Apr 3rd At 10PM ET!</h3>
                            </div>
                            
                            <div className='sm_h2'>
                                <h2>Join The Challenge Now For A One-Time Discounted Payment Of Only $100</h2>
                            </div>
                            
                           
                            <button><h3>Join the Challenge Now</h3><p className='btnnn_p'>I want daily training, Live Coaching and accountability from day to day 30</p></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Section1