import React from 'react'
import '../Styles/Section3.css'
import Board from '../images/bord2.png'
import Of from '../images/ofastack.png'

const Section3 = () => {
  return (
    <div >
        <div className='section3'>
            <br />
            <div className='board'>
                <img src={Board} alt= 'board' className='img-fluid' />
            </div>
            <br />
            <div>
                <img src={Of} alt= 'board' className='img-fluid' />
            </div>
            <div className='red_div'>
                <h1>Total Value: <span className='red_text'>$3,126</span></h1>
            </div>
            <br />
            <div className='sec3_pp'>
                <p>If you want to get your funnel LIVE and start building your</p>
                <p>business, then <span className='underline_text'>this</span> is the mission we’re giving you...</p>
            </div>
            <div className='sec3_h4'>
                <h4 className='change_color'>You have 30 Days, starting Apr 18th...</h4>
                <h1 > Do <span className='underline_text'>YOU</span> Accept?</h1>
            </div>
            <div className='sec3_btn'>
                <button>
                    <h3 className=''>Join the Challenge Now !</h3><p>I want daily training, Live Coaching and accountability from day 1 to day 30</p>
                </button>
               
            </div>
             <br />
        </div>
        <div className='secc3_big'>
            <br />
            <br />
            <h1 className='change_color'>Need More Information Before You</h1>
            <h1 className='change_color'>Make Your Decision...?</h1>
            <br />
            <div>
                <p className='change_color'>Let Me Break Down All The Awesome Stuff You'll</p>
                <p className='change_color'>Get When You Join The Challenge Today!</p>
            </div>
        </div>
        <br />
        <br />
        
    </div>
  )
}

export default Section3