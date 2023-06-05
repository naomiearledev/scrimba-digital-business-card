import Button from "../parts/Button"
import profileImg from "../assets/profile.jpeg"

export default function Profile() {
  return (
    <div className="profile">
      <img src={profileImg} alt="Naomi Earle profile image" width="60px" />
      <div className="profile_main">
        <h1>Naomi Earle</h1>
        <p>Frontend Developer</p>
        <span>naomiearle.website</span>
      </div>
      <Button linkSrc="https://google.com" color="white" text="Email" icon="email" />
      <Button linkSrc="https://linkedin.com" color="blue" text="LinkedIn" icon="linkedin" />
    </div>
  )
}