import React from 'react'
import "./intro.css"
import Me from "../../img/me.png";


const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className='i-name'>Hashan Perera</h1>
                 <div className='i-title'>
                   <div className='i-title-wrapper'>
                    <div className='i-title-item'>Web Developer</div>
                    <div className='i-title-item'>System Engineer</div>
                    <div className='i-title-item'>Hiker</div>
                    <div className='i-title-item'>Linux Administrator</div>
                    <div className='i-title-item'>App Engineer</div>
                   </div>
                 </div>
                 <p className='i-desc'>I design and Develop services for customer of all sizes, Specializing in creating stylish, Modern Websites, Web services and online Stores! </p>
              </div> 
            <svg className='i-scroll' viewBox="0 0 20 20">
							<path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
						</svg>     
        </div>        
        <div className='i-right'>
          <div className='i-bg'></div>
            <img src={Me} 
                alt='' 
                className='i-img'/>
        </div>
        
    </div>
  )
}

export default Intro