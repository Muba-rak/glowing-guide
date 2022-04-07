import React from 'react'
import '../Styles/Section10.css'
import G1 from '../images/grid1.png'
import G2 from '../images/grid2.png'
import G3 from '../images/grid3.png'

const Section10 = () => {
  return (
    <div className='section10'>
      <br />
      <br />
      <img src={G1} alt=""  className='img-fluid'/>
      <img src={G2} alt=""  className='img-fluid'/>
      <img src={G3} alt=""  className='img-fluid'/>
      <div>
        <p className='italic_text'>Testimonials shown are real experiences from paying users of ClickFunnels. Their results are not typical 
          and your experience will vary based upon your effort, education, business model, and market forces beyond 
          our control. We make no earnings claims or return on investment claims, and you may not make your money back."</p>
      </div>

    </div>
  )
}

export default Section10