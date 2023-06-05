import PropTypes from 'prop-types'

export default function ContentSection({ type }) {
  const aboutContent = "I’m a front end developer with a passion for building fast, fun experiences for users. I love keeping up to date with the latest in the front end space and working on interesting and challenging projects."
  const interestsContent = "Food (cooking and eating), playing bass, listening to music, gaming, watching anime and movies, travelling, reading, sewing and playing with my dog!"

  return (
    <div className="content_section">
      <h2>{type === 'about' ? 'About' : 'Interests'}</h2>
      <p>{type === 'about' ? aboutContent : interestsContent}</p>
    </div>
  )
}

ContentSection.propTypes = {
  type: PropTypes.string.isRequired 
}