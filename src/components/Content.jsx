import ContentSection from "../parts/ContentSection"
import "../assets/css/Content.css"

export default function Content() {
  return (
    <div className="content">
      <ContentSection type="about" />
      <ContentSection type="interests" />
    </div>
  )
}