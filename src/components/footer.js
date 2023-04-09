import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-div">
            <DangerousHTML
              html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850011!2d121.04882269999999!3d14.5532811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8efd99aad53%3A0xb64b39847a866fde!2skodego!5e0!3m2!1sen!2sph!4v1680991754221!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
              className=""
            ></DangerousHTML>
          </div>
        </div>
        <div className="footer-container3">
          <span className="footer-text">{props.text}</span>
        </div>
        <div className="footer-container4">
          <img
            alt={props.image_alt}
            src="https://www.greatplacetowork.com.ph/wp-content/uploads/2022/01/2022_Philippines_Best-Workplaces.png"
            loading="lazy"
            className="footer-image"
          />
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: '© 2023 VETOPIA. Proudly created by Group 1',
  rootClassName: '',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
