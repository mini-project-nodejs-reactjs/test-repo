import { Link, useNavigate } from "react-router-dom"
import SolidButton from "../components/SolidButton"
import { useEffect } from "react"
import { useSelector } from "react-redux"

import Footer from "../components/Footer";

const LandingPage = () => {
  const accessToken = useSelector(store => store.userReducer.accessToken)
  const navigate = useNavigate()
  useEffect(() => {
    if (accessToken) {
      navigate('/boards')
    }
  }, [accessToken, navigate])
  return ( 
    <div className="landing-page">
      <div className="section-1">
        <div className="container-1">
          <div className="left">
            <h2 className="title">Trello brings all your tasks, teammates, and tools together</h2>
            <h5 className="subtitle">Keep everything in the same place—even if your team isn’t.</h5>
            <Link to="/">
              <SolidButton text="Sign up - it's free!" />
            </Link>
          </div>
          <div className="right">
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=540" alt="todo-app" className="banner-illustration"/>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="container-2">
          <div className="section-head">
            <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>TRELLO 101</div>
            <h2 className="title">A productivity powerhouse</h2>
            <h5 className="subtitle">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our guide for getting started.</h5>
          </div>
          <div className="section-body">
            <div className="left">
              <div className="feature-card">
                <div className="title">Boards</div>
                <div className="body">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</div>
              </div>
              <div className="feature-card">
                <div className="title">Lists</div>
                <div className="body">The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</div>
              </div>
              <div className="feature-card">
                <div className="title">Cards</div>
                <div className="body">Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</div>
              </div>
            </div>
            <div className="right">
              <img src="https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1140&fm=webp" alt="todo-app" className="feature-image"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div> 
  )
}

export default LandingPage