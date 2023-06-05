import PropTypes from 'prop-types'
import emailIcon from '../assets/email.png'
import linkedinIcon from '../assets/linkedin.png'

export default function Button({ linkSrc, color, text, icon }) {
  const className = `button button-${color}`
  
  return (
    <a className={className} href={linkSrc}>
      <img src={icon === 'email' ? emailIcon : linkedinIcon} />
      <p>{text}</p>
    </a>
  )
}

Button.propTypes = {
  linkSrc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}