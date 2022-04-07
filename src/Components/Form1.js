import React from 'react'
import { Accordion } from 'react-bootstrap'
import '../Styles/Section9.css'
import '../Styles/Form1.css'
import Funnel from '../images/funnelgra.png'
import Cred from '../images/credit.png'

const Form1 = () => {
  return (
    <div className='form_steps'>
        <Accordion defaultActiveKey="0" flush>
    <Accordion.Item defaultActiveKey="1" eventKey="0">
        <Accordion.Header><div className='head'><h1>STEP 1: CONTACT INFO</h1></div></Accordion.Header>
        <Accordion.Body>
        <br />
     
      <div className=' sec9_b'>
        <form action='' >
          <div>
            <h6>Full Name:</h6>
            <input type='text' placeHolder= 'Name as appears on Card' className='input0' />
          </div>
           <div>
            <h6>Email Address:</h6>
            <input type='text' placeHolder= 'Your Email Address here' className='input0' />
          </div>
           <div>
            <h6>Address</h6>
            <div>
              <input type='text' placeHolder= 'Full Address...' className='input0' />
            </div>
            <div>
               <input type='text' placeHolder= 'City Name' className='input0' />
            </div>
            <div className='flex_input'>
              <input type='text' placeHolder= 'State/Province' className='input1' />
              <input type='text' placeHolder= 'Zip Code' className='input2' />
            </div>
          </div>
           <div>
            <input type='text' placeHolder= 'Select Country' className='input0' />
          </div>

          <button className='form_btn'><h4>Next Step >>></h4></button>
        </form>
        <br />
      </div>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header> 
          <div className='head'><h1>STEP 2: PAYMENT INFO</h1></div>
      </Accordion.Header>
        <Accordion.Body>
             
      <div className='sec9_b'>
        <form>
          <div>
            <h6>Credit Card Number</h6>
            <input type='text' placeHolder= 'Cards Number' className='input0' />
          </div>
          <div className='flex_input'>
            <div>
               <h6>Expiry date*</h6>
              <input type='text' placeHolder= 'MM/YY' className='input3' />
            </div>
            <div>
              <h6>CVC Code:</h6>
              <input type='text' placeHolder= 'CVC' className='input3' />
            </div>
          </div>
          <button className='form_btn'><h4>Next Step >></h4></button>
        </form>
      </div>
        
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
        <Accordion.Header><div className='head'><h1>STEP 3: ALSO WANT MY TRAINING</h1></div></Accordion.Header>
        <Accordion.Body>
        <div className='accordion2'>
            <div>
                <img src={Funnel} alt='image' className='img-fluid' />
            </div>
            <div className='acc_2'>
                <div className='dark'>
                    <input type="checkbox" id="Russ" name="Russ" value="Bike" />
                    <label for="Russ"><p>Yes Russell! Upgrade My Order Now!</p></label><br></br>
                </div>
                <div className='dark2'>
                    <p><span className='red_text underline_text'>One Time Offer - Only $37</span>People always wonder: 
                    "What happens if I build a funnel, and it FLOPS?” Don’t worry (Most people's do the first time...)!
                     At last year’s Funnel Hacking Live, I gave a special workshop called Funnel Audibles. It shows you a 
                     simple process to take ANY funnel that’s broken, and turn it from a ‘zero’ to a ‘HERO’! Click YES to 
                     get the training, plus the transcripts and companion workbook that will walk you through how to do a 
                    funnel audible on your own funnel now for just $37! (This offer is not available ANYWHERE else on the market!)</p>
                </div>
            </div>
              <div className='head_payment'>
                  <div className='border_bottom payment'>
                    <h6>Item</h6>
                    <h6>amount</h6>

                  </div>
                   <div className='border_bottom payment'>
                     <p>ONE FUNNEL AWAY CHALLENGE - Digital Only</p>
                     <p>$100.00</p>

                  </div>
                   <div className='payment'>
                     <h6>Order Total:</h6>
                     <h6>$100.00</h6>
                  </div>
              </div>
              <div className='dark_btn'>
                <button><h3>Yes start the One Funnel Challenge! >> </h3></button>
              </div>
              <div className='last_p'>
                <p>🔒 By providing us with your information you are consenting to the collection 
                  and use of your information in accordance with our Terms of Service and Privacy Policy.</p>
              </div>
              <div>
                <img src={Cred} alt='image' className ='img-fluid' />
              </div>
        </div>
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
    </div>
  )
}

export default Form1