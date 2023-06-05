import LogoLink from "../parts/LogoLink"
import "../assets/css/LogoFooter.css"

export default function LogoFooter() {
  return (
    <div className="footer">
      <LogoLink type="twitter" />
      <LogoLink type="facebook" />
      <LogoLink type="instagram" />
      <LogoLink type="github" />
    </div>
  )
}