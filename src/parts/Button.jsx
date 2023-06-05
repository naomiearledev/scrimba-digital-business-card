import PropTypes from 'prop-types'
import '../assets/css/Button.css'

export default function Button({ linkSrc, color, text, icon }) {
  const className = `button button-${color}`
  
  return (
    <a className="button_link" href={linkSrc}>
      <div className={className}>
        <i className={icon === 'email' ? "fa-solid fa-envelope" : "fa-brands fa-linkedin"}></i>
        <p>{text}</p>
      </div>
    </a>
  )
}

Button.propTypes = {
  linkSrc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}