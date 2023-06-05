import PropTypes from 'prop-types'
import '../assets/css/Button.css'

export default function Button({ type, text }) {
  const href = type === 'email' ? "https://google.com" : "https://linkedin.com"
  const className = `button button-${type === 'email' ? 'white' : 'blue'}`
  const icon = type === 'email' ? "fa-solid fa-envelope" : "fa-brands fa-linkedin"
  
  return (
    <a className="button_link" href={href}>
      <div className={className}>
        <i className={icon}></i>
        <p>{text}</p>
      </div>
    </a>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}