// import { useFruits } from '../hooks/useFruits.ts'
import SocialLinks from './SocialLinks.tsx'
import AboutMe from './AboutMe.tsx'


// TODO: 
// Home page with all the components for my portfolio 
// About me section 
// Projects
// Resume
// Contact form
// Socials


function App() {

  return (
    <>
      <div className="app">
        <h1>My Portfolio</h1>
      </div>
      <div>
        <SocialLinks />
        <AboutMe />
      </div>
    </>
  )
}

export default App
