// import { useFruits } from '../hooks/useFruits.ts'
import SocialLinks from './SocialLinks.tsx'


// TODO: 
// Home page with all the components for my portfolio 
// About me section 
// Projects
// Resume
// Contact form
// Socials


function App() {
  // const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>My Portfolio</h1>
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      </div>
      <div>
        <SocialLinks />
      </div>
    </>
  )
}

export default App
