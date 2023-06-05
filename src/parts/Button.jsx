export default function Button({ linkSrc, color, text, icon }) {
  const className = `button button-${color}`
  let iconSrc;
  if (icon === 'email') {
    iconSrc = 'email-icon';
  } else if (icon === 'linkedin') {
    iconSrc = 'linkedin-icon';
  }
  
  return (
    <a className={className} href={linkSrc}>
      <p>{iconSrc}</p>
      <p>{text}</p>
    </a>
  )
}