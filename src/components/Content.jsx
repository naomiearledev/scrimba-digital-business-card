import { useState } from "react"

import ContentSection from "../parts/ContentSection"
import "../assets/css/Content.css"

export default function Content() {
  const [showContent, setShowContent] = useState(false)

  const toggleShowContent = () => {
    setShowContent(!showContent)
  }

  const iconClassName = showContent === true ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
  const iconText = showContent === true ? "Hide info" : "Show info"

  return (
    <div className="content">
      <button className="content_toggle-button" onClick={toggleShowContent}>{iconText} <i className={iconClassName}></i></button>
      {showContent === true &&
        <>
          <ContentSection type="about" />
          <ContentSection type="interests" />
        </>
      }
    </div>
  )
}