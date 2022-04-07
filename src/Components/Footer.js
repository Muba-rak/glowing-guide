import React from 'react'
import Footer_img from "../images/Footer_img.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <img src={Footer_img} alt="" />

            <div>
                <a href="">Terms </a> <a href="">Privacy</a> <a href="">Support</a>{" "}
                <a href="">Cookie Preferences</a>
            </div>
            <div className="footer_div_2">
                <p>
                    Cookie Preferences California residents can obtain information about
                    the categories of personal information collected, and the business
                    purposes for which the information is collected, by clicking here.
                </p>
                <p>
                    © 2022 ETISON LLC - All Rights Reserved - 3443 W Bavaria St, Eagle,
                    ID 83616
                </p>
            </div>
      </footer>
        
    </div>
  )
}

export default Footer