import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Styles/Section2.css'
import Exclamation from '../images/exclamation.png'
import Russell from '../images/russell.jpg'
import Dollars from "../images/100dollars.jpg";
import Testimo from "../images/Testimonials.png";
const Section2 = () => {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col>
                <div className='section2_main'>
                    <div className='section2_main_top'>
                        <div className='sm2_img'>
                            <img src={Exclamation} alt= 'image' className='img-fluid' />

                        </div>
                        <div className='sm2_1'>
                            <h1 className="Hsection2_flex_2_p1">Freedom is just </h1>
                            <h1 className="Hsection2_flex_2_p2">One funnel away</h1>

                        </div>
                    </div>
                </div>
                <div className='section2_main_mid'>
                    <div className='sec2_mid_1'>
                    <section className="Hsection2_flex_two">
                <   div>
                    <p>
                    <span className='change_color'>From</span>: Russell Brunson
                    </p>
                    <p>
                    <span className='change_color'>Where</span>: Boise, Idaho{" "}
                    </p>
                    <p>
                    What does <span className='bold_text'> 'One Funnel Away' mean for you...?</span>
                    </p>

                    <p>For everyone it's different...</p>
                    <p>
                    For some of you,<span className='underline_text'> you're in a job that you hate,</span> and
                    you're trying to get out.
                    </p>

                    <p>
                    For others, you are entrepreneurs with your own company...{" "}
                    <span className='underline_text'>but you're stuck</span>, and you're not sure why!
                    </p>

                    <p>
                    And for others of you, you're looking for that one funnel that
                    will help you to <span className='bold_text'>have more impact on the world!</span>
                    </p>

                    <p>
                    Before I share with you MY GOAL for this 'One Funnel Away
                    challenge for YOU... let me ask you a few questions...
                    </p>
                </div>
                </section>
         
                    </div>
                    <div className='sec2_mid_2'>
                         <img src={Russell} alt= 'image' className='img-fluid' />
                    </div>
                </div>
                <div className='sec2_bottom'>
            
          <section className="Hsection2_section_3">
            <h2> Please Check All Of The Questions <br /> Where Your Answer Is YES! </h2>
            <br />
          <form className="Hsection2_section_3_form" action="">
            <div>
              <input type="checkbox" name="" id="" />
              <p>
                Do you want to grow your business online, but you have<span className='underline_text'> NO IDEA
                where to start?</span> 
              </p>
            </div>
        
            <div>
              <input type="checkbox" name="" id="" />
              <p>
                {"  "}
                Do you have a company that's been successful, but for some reason <span className='underline_text'> you're feeling stuck?</span> 
              </p>
            </div>

            <div>
              <input type="checkbox" name="" id="" />
              <p>
                {" "}
                Do you want <span className='underline_text'> direct live access to experts</span>  who can help you with your funnels, strategy offer, marketing, sales, and ANY question you have? 
              </p>
            </div>

            <div>
              <input type="checkbox" name="" id="" />
              <p>
                {" "}
                Are you trying to figure out a way to reach more people, or have a <span className='underline_text'> bigger impact on the world?</span> 
              </p>
            </div>

            <div>
              <input type="checkbox" name="" id="" />
              <p>
                {" "}
                Are you <span className='bold_text change_color'> convinced that you need a funnel,</span>  but you aren't quite sure what steps to take?
              </p>
            </div>

            <div>
              <input type="checkbox" name="" id="" />
              <p>
                {" "}
               Are you <span className='underline_text'> about to launch your next funnel</span> , and want to make sure it's a <span className='change_color bold_text'>huge success!?!</span>
              </p>
            </div>
          </form>
        </section>
        <div className='section2_dollar'>
            <div className='dollar_h1'>
                <h1>If You Checked ANY Of The Boxes Above, Then I</h1>
                <h1>Want To Invite You To Join The <span className='bold_text change_color'>'One Funnel Away'</span> </h1>
                <h1>Challenge And <span className='underline_text'>Change Your Business Forever!</span></h1>
            </div>
            <div className='dollar_here'>
                <h1 className='bold_text change_color'>So, Here Is How The</h1>
                <h1 className='bold_text change_color'>Challenge Works...</h1>
            </div>
            <br />
            <p className="Hsection2_p_3">
            <span className='bold_text change_color'>The challenge costs $100 to join.</span> This covers your materials during
            the challenge (more info on this below).
            </p>

            <div className="Hsection2_div_img">
            <img className="Hsection2_div_img img-fluid" src={Dollars} alt="" />
            </div>
            <div className='dollar_pp'>
                <p>With the <span className='bold_text change_color'>One Funnel Away Challenge</span> , we could easily charge $1,000 for the full 30 day challenge…</p>
                <br />
                <p>Probably even $2,000, or more, but...</p>
            </div>
            <div className='need_h1'>
                <div>
                    <p className="big_p change_color bold_text"> All You Pay Is $100! </p>
                </div>
                <div>
                    <img className="Hsection2_div_img_Testimo img-fluid" src={Testimo} alt="" />
                </div>
                <h1 className="change_color bold_text"> Then In Exchange For That Tiny $100</h1><h1 className="change_color bold_text"> Investment, You Get ALL Of This: </h1>
            </div>
        </div>
            

       
        </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section2