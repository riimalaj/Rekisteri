
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return(
        <div className={navStyles.nav}>            
            <ul>
                <li>
                    <Link href = "/kontaktit"><a>Kontaktit</a></Link>
                </li>
                <li>
                    <Link href = "/huolto"><a>Huollot</a></Link>
                </li>                
                <li>
                    <Link href = "/HuoltoForm"><a>Huolto</a></Link>
                </li>
                <li>
                    <Link href = "/About"><a>About</a></Link>
                </li>

            </ul>
        </div>
    )

}

export default Nav