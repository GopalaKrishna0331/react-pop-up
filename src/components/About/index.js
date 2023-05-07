import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="About-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="sm-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="lg-image"
      />
    </div>
  </>
)

export default About
