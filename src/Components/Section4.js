import React from 'react'
import '../Styles/Section4.css'
import ofa_small_min from "../images/ofa_small-min.png";
import Map from '../images/map.png'
import Testimonial from '../images/testimoniall.png'


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
                <img src={Map} alt=""  className='img-fluid'/>
            </div>
            <br />
            <div className='sec4_d'>
                <h1 className='change_color'>Here Is Your Mission,</h1>
                <p>(Should You Choose To Accept This Challenge…)</p>
            </div>
            <div className='sec4_e'>
                <h1>Your Challenge Is To <span className='underline_text'>TAKE ACTION</span></h1>
                <h1>And Complete The Tasks Given To You,</h1>
                <h1 className='bold_text'>Every Day For 30 Days</h1>
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
                    <p className='change_color bold_text'> “Do YOU Have What It Takes?”</p>
                    <p>
                    By the time the challenge is over, you will have a funnel that is
                    LIVE!
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
                    <h3 className=''>Join the Challenge Now !</h3><p>I want daily training, Live Coaching and accountability from day 1 to day 30</p>
                </button>   
            </div>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default Section4