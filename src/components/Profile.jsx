import Button from "../parts/Button"
import '../assets/css/Profile.css'

export default function Profile() {
  return (
    <div className="profile">
      <h1>Naomi Earle</h1>
      <p>Frontend Developer</p>
      <span>naomiearle.website</span>
      <div className="profile_buttons">
        <Button type="email" text="Email" />
        <Button type="linkedin" text="LinkedIn" />
      </div>
    </div>
  )
}