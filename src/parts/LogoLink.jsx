import PropTypes from 'prop-types'

export default function LogoLink({ type }) {
  let className;
  let href;

  switch (type) {
    case 'twitter':
      className = "fa-brands fa-square-twitter fa-2xl";
      href = "https://twitter.com";
      break;
    case 'facebook':
      className = "fa-brands fa-square-facebook fa-2xl";
      href = "https://facebook.com"
      break;
    case 'instagram':
      className = "fa-brands fa-square-instagram fa-2xl";
      href = "https://instagram.com"
      break;
    case 'github':
      className = "fa-brands fa-square-github fa-2xl";
      href = "https://github.com"
      break;
    default:
      return;
  }

  return (
    <a href={href}>
      <i className={className}></i>
    </a>
  )
}

LogoLink.propTypes = {
  type: PropTypes.string.isRequired
}