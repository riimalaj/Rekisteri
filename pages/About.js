import Nav from '../components/nav'
import aboutStyle from '../styles/About.module.css'

export default function about() {
  return (
    <div>
        <Nav />
        <div className={aboutStyle.about}>
          <h3>Hello rock star, you are now on about.js</h3>
        </div>        
    </div>
  )
}
