import React from 'react'
import Footer from '../Components/Footer'
import Section1 from '../Components/Section1'
import Section10 from '../Components/Section10'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'
import Section7 from '../Components/Section7'
import Section8 from '../Components/Section8'
import Section9 from '../Components/Section9'
import '../Styles/Section1.css'

const Homepage = () => {
  return (
    <div>
        <Section1 />
        <div className='boxshadow'>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
        <br />
        <br />
        <div className='boxshadow'>
          <Section7 />
        </div>
        <br />
        <br />
        <div className='boxshadow'>
          <Section8 />
          <Section9 />
        </div>
        <Section10 />
        <Footer />
    </div>
  )
}

export default Homepage