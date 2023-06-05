import './App.css'
import Profile from './components/Profile'
import Content from './components/Content'
import LogoFooter from './components/LogoFooter'

function App() {
  return (
    <div className="app">
      <div className="business-card">
        <Profile />
        <Content />
        <LogoFooter />
      </div>
    </div>
  )
}

export default App
