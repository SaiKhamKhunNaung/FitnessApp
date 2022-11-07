import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import FaceBook from '../../assets/facebook.png'

const Footer = () => {
  return (
      <div className="Footer-container">
          <hr />
          <div className="footer">
              <div className="social-links">
                    <a href="https://github.com/SaiKhamKhunNaung" target='_blank'><img src={Github} alt="" /></a>
                    <a href="https://www.instagram.com/steven_kham/" target='_blank' ><img src={Instagram} alt="" /></a>
                    <a href="https://www.facebook.com/saikham.khunnaung" target='_blank'><img src={FaceBook} alt=""  className='fb'/></a>
              </div>
              <div className="logo-f">
                          <img src={Logo} alt="" />
                          <span>CopyRight &#169; SSKKN (2022) </span>
              </div>
      </div>  
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
   </div>
  )
}

export default Footer