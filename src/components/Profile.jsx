import Button from "../parts/Button"
import '../assets/css/Profile.css'

export default function Profile() {
  return (
    <div className="profile">
      <h1>Naomi Earle</h1>
      <p>Frontend Developer</p>
      <span>naomiearle.website</span>
      <div className="profile_buttons">
        <Button linkSrc="https://google.com" color="white" text="Email" icon="email" />
        <Button linkSrc="https://linkedin.com" color="blue" text="LinkedIn" icon="linkedin" />
      </div>
    </div>
  )
}