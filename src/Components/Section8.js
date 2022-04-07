import React from 'react'
import '../Styles/Section8.css'
import Board from '../images/bord2.png'
import Of from '../images/ofastack.png'

const Section8 = () => {
  return (
    <div className='section8'>
        <section className='sec8_main'>
            <div className='sec8_a'>
                <h3>Here’s A Recap Of</h3>
                <h1>EVERYTHING You'll Get <span className='underline_text'>FREE</span></h1>
                <h3>When You Accept The ‘One Funnel Away’ Challenge Today!</h3>
            </div>
            <div className='sec8_bottom'>
                <div className='sec8_b'>
                    <img src={Board} alt='image' className= 'img-fluid ' />
                </div>
                <br />
                <div>
                    <img src={Of} alt= 'board' className='img-fluid' />
                </div>
                <div className='sec8_c'>
                    <div className='red_div'>
                        <h1>Total Value: <span className='red_text'>$3,126</span></h1>
                    </div>
                    <br />
                    <div className='sec3_pp'>
                        <p className='italic_text'>If you want to get your funnel LIVE and start building your</p>
                        <p className='italic_text'>business, then <span className='underline_text'>this</span> is the mission we’re giving you..</p>
                    </div>
                    <div className='sec3_h4'>
                        <h4 className='change_color'>You have 30 Days, starting Apr 18th...</h4>
                        <h1 className='change_color' > Do <span className='underline_text'>YOU</span> Accept?</h1>
                    </div>

                </div>
            </div>
            <div className='sec8_a sec8_d'>
                <h3>Join The ‘One Funnel Away’ Challenge Today!</h3>
                <h1>For Only $100</h1>
            </div>
            


        </section>
    </div>
  )
}

export default Section8