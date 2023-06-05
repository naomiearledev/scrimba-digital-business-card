import './assets/css/App.css'
import profileImg from "./assets/images/profile-square.jpeg"
import Profile from './components/Profile'
import Content from './components/Content'
import LogoFooter from './components/LogoFooter'

function App() {
  return (
    <div className="app">
      <div className="business-card">
        <img src={profileImg} alt="Naomi Earle profile image" width="60px" />
        <div className="business-card_main">
          <Profile />
          <Content />
        </div>
        <LogoFooter />
      </div>
    </div>
  )
}

export default App
