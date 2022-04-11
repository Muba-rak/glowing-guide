import React from 'react'
import '../Styles/Section6.css'
import Huf from '../images/huf.png'
import Triangle from '../images/triangle2.png'
import Board from '../images/bord2.png'
import T2 from '../images/test2.png'

const Section6 = () => {
  return (
    <div className='section6 boxshadow2'>
        <section>
             <div className='sec6_sec_1'>
                 <div>
                     <img src={Huf} alt='image' className= 'img-fluid' />
                 </div>
                 <div>
                     <img src={Huf} alt='image' className= 'img-fluid' />
                 </div>
                 <div>
                     <img src={Huf} alt='image' className= 'img-fluid' />
                 </div>     
            </div>
            <div className='sec6_sec_2'>
                <div>
                    <h1 className='change_color'>The One Funnel Away</h1>
                    <h1 className='change_color'>Challenge Is Different!</h1>
                </div>
                <div className='triangle'>
                    <img src={Triangle} alt='image' className= 'img-fluid triangle' />
                </div>
                <div>
                    <p><span>The One Funnel Away Challenge is NOT just some “course” that you’ll never use…</span></p>
                    <p>It combines the right marketing <span className='change_color bold_text'> Knowledge</span></p>
                    <p>With the SHOVE you need to<span className='change_color bold_text'>EXECUTE</span> your funnel</p>
                    <p><span className='change_color bold_text'></span></p>
                </div>
                <div>
                    <p>And a “no-excuses”  <span className='change_color bold_text'> ACCOUNTABILITY</span> team of coaches
                    who are caring and supportive, while making sure that you get your tasks done…
                    </p>
                </div>
                <div>
                    <p>That’s the biggest challenge in getting your first (or next) funnel started…</p>
                </div>
                <div>
                    <p>It’s almost NEVER a lack of knowledge that’s the problem...</p>
                    <h3 className='change_color bold_text big_h333'>It’s A Lack Of EXECUTION…</h3>
                    <p>(or, not executing the right way).</p>
                </div>
            </div>
        </section>
        <div className='sec6_a'>
            <div>
                <img src={Board} alt='image' className= 'img-fluid ' />
            </div>
            <div className='sec3_btn sec6_btn '>
                <button>
                    <h3 className=''>Join the Challenge Now !</h3><p>I want daily training, Live Coaching and accountability from day 1 to day 30</p>
                </button>
            </div>
            <div>
                <p>As you can probably see,<span className='bold_text'>getting access to the 'One Funnel Away' challenge</span>is like having me, and my entire OFA Expert Consulting Team as your own personal funnel coaches!  </p>
            </div>
            <div>
                <p>The only difference is that you couldn't buy a 1 hour consulting call with me for $100.  </p>
            </div>
            <div>
                <p>In fact, right now the CHEAPEST you can hire me to "pick my brain" is $100,000 for a day.</p>
            </div>
            <div>
                <p>So, to get 30 days with all of us, for just $100 is crazy!</p>
            </div>
            <div>
                <p>Yet <span className='underline_text bold_text'>you get everything we talked about above for FREE when you join the 'One Funnel Away'</span></p><p>challenge today</p>
            </div>
            <div>
                <p>So, are you excited yet!?!<span className='bold_text'>If so, then NOW is the time to take action!</span></p>
            </div>
            <br />
            <br />
        </div>
        <div className='sec6_c'>
            <div className='sec6_c_1'>
                <img src={T2} alt='image' className= 'img-fluid' />
            </div>
            <br />
            <div className='sec6_c_2'>
                <div>
                    <h1 className='bold_text change_color'>This Challenge Is</h1>
                    <h1 className='bold_text change_color'>NOT For Everyone!</h1>
                </div>
                <div>
                    <p>If you want to watch every day of the challenge, and say<span className='italic_text'>“Thanks, Russell! That was some great info!”</span></p>
                </div>
                <div>
                    <p>...but never actually do anything with it, that’s entirely up to you.</p>
                </div>
                <div>
                    <p>(But chances are, nothing will actually change in your business…If that’s what you want to do,<span className='underline_text'>then this challenge is probably not for you).</span></p>
                </div>
                <div>
                    <h6 className='bold_text change_color'>But...</h6>
                    <p>If you are willing to roll up your sleeves and do just a little bit of work for 30 days…</p>
                </div>
                <div>
                    <p>If you want to be trained daily by Russell Brunson, and have him <span className='change_color'>PULL</span> you in the right direction...</p>
                </div>
                <div>
                    <p>If you need a good hard<span className='change_color'>PUSH</span>from a coach who will hold you accountable, and make sure that you get these tasks <span className='underline_text italic_text'>DONE</span> (no excuses!)...</p>
                </div>
                <div>
                    <p>Then we invite you to <span className='bold_text underline_text'>accept the ‘One Funnel Away’ Challenge, </span>get your funnel built, and start creating <span className='underline_text'>momentum</span> in your business!</p>
                </div>
            </div>
        </div>
        <br />
       
        
    </div>
  )
}

export default Section6