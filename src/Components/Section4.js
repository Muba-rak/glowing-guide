import React from 'react'
import '../Styles/Section4.css'
import ofa_small_min from "../images/ofa_small-min.png";
import Map from '../images/map.png'
import Testimonial from '../images/testimoniall.png'
import Step from '../images/step.png'
import Lappy from '../images/onepage_computer-min.png'
import Lap from '../images/ofa_small-min.png'


const Section4 = () => {
  return (
    <div className='section4'>
        <div className='sec4_main'>
            <br />
            <div className='sec4_a'>
                <div className='sec4_a_1'>
                    <img src={ofa_small_min} alt=""  className='img-fluid'/>
                </div>
                <div className='sec4_a_2'>
                    <p>The First Thing You’ll <span className='underline_text'>Get Access</span> To Is The...</p>
                    <h2>'One Funnel Away' </h2>
                    <h1> CHALLENGE...</h1>
                </div>
            </div>
            <div className='sec4_b'>
                <p>Led by Trainer <span className='bold_text change_color'>Russell Brunson and The ‘One Funnel Away’ Consulting Team,</span>  this challenge is</p>
                <p>designed to help you <span className='change_color'>Customize</span> and <span className='change_color underline_text'>IMPLEMENT</span> your first (or next) funnel in just 30 days…</p>
            </div>
            <div className='sec4_c'>
                <div class="grid">
                    <div className='item1'>
                        <div><h1>Step #1</h1></div>
                        <div><br /></div>
                        <div><img src={Step} alt=""  className='img-fluid img_grid'/></div>
                        <div><br /></div>
                        <div className='top_bottom'> <h4 className='change_color italic_text'>"The Strategy"</h4> </div>
                        <div><br /></div>
                        <div>
                            Each day, you will receive <u>a new mission from Russell,</u> streamed to the private Facebook group.  
                        </div>
                        <div><br /></div>
                        <div>These private videos will be about 30 minutes long, and will give you the  
                            <u> strategy</u> you have to master for each step you need for success. </div>
                        <div><br /></div>
                        <div>
                            You will have the ability to network with and ask questions to our coaches as 
                            well as others OFA-ers who are also going through the challenge with you!
                        </div>  
                    </div>
                    <div><br /></div>
                    <div className='item1 item2'>
                        <div><h1>Step #2</h1></div>
                        <div><br /></div>
                        <div><img src={Lappy} alt=""  className='img-fluid img_grid'/></div>
                        <div><br /></div>
                        <div className='top_bottom'> <h4 className='change_color italic_text'>"The Tactics"</h4> </div>
                        <div><br /></div>
                        <div>
                            After the stream ends in the Facebook group, you will be given a <b className='change_color'>"One Pager" mission document </b>
                            with the exact step by step tactics you need to implement to complete that step. 
                        </div>
                        <div><br /></div>
                        <div>
                            There will be videos showing <u>HOW to implement the strategy</u> as well as a digital workbook to help keep everything clear!
                        </div>
                        <div><br /></div>
                        <div>These missions will take between 30-60 minutes to complete each day. </div>
                    </div>
                    <div><br /></div>
                    <div className='item1 item3'>
                        <div><h1>Step #3</h1></div>
                        <div><br /></div>
                        <div><img src={Lap} alt=""  className='img-fluid img_grid'/></div>
                        <div><br /></div>
                        <div className='top_bottom'> <h4 className='change_color italic_text'>"Implementations"</h4> </div>
                        <div><br /></div>
                        <div>Not only do you get 30 days of daily video coaching and accountability…</div>
                        <div><br /></div>
                        <div>You also <b>LIVE TRAINING SESSIONS DAILY</b> Monday - Friday with our expert OFA consultants.</div>
                        <div><br /></div>
                        <div>
                            On these special live trainings, you get to pick their brains and ask ANY question 
                            you have about your funnels, strategies, your offer, tech challenges, you name it.
                        </div>
                        <div><br /></div>
                        <div><b>It’s like having your very own DEDICATED SUPPORT TEAM.</b></div>
                    </div>
                </div>
            </div>
            <br />
            <div className='sec4_d'>
                <h1 className='change_color'>Here Is Your Mission,</h1>
                <p>(Should You Choose To Accept This Challenge…)</p>
            </div>
            <div className='sec4_e'>
                <h1>Your Challenge Is To <span className='underline_text'>TAKE ACTION</span></h1>
                <h1>And Complete The Tasks Given To You,</h1>
                <h1 className='bold_text '>Every Day For 30 Days</h1>
            </div>
            <br />
            <div className='sec4_f'>
                <div className='sec4_f_1 Hsection4___'>
                    <div>
                        <p> Yes, there will be some prep-work involved…</p>
                    <p> Yes, there will be homework…</p>
                    <p>
                    But every day, you’ll be taking steps toward building your
                    business!{" "}
                    </p>
                    <p> Our only question for you is…</p>
                    <p className='change_color bold_text edit'> “Do YOU Have What It Takes?”</p>
                    <p className='bold_text edit_p'>
                    By the time the challenge is over, you will have a funnel that is <u>LIVE!</u>
                    </p>
                    <p>
                    {" "}
                    Not only will we help you figure out what that funnel is, but
                    you’ll have it created and FINISHED by the end of the challenge!
                    </p>
                    <p>
                    {" "}
                    And, you’ll be able to launch it to the world, generate leads, and
                    turn those leads into customers who buy from you again and again.
                    </p>

                    </div>
                    
                </div>
                <div className='sec4_f_2'>
                     <img src={Testimonial} alt=""  className='img-fluid'/>
                </div>
            </div>
            <div className='sec3_btn'>
                <button>
                    <h3 className='h3_1'> Join the challenge Now </h3>
                    <h3 className='h3_2'> Start Now! </h3>
                    <p>I want daily training, Live Coaching and accountability from day 1 to day 30</p>
                </button>   
            </div>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default Section4