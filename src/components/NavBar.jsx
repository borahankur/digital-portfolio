import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from  "react-icons/fa6"
import {FaGithub} from  "react-icons/fa6"
import {FaXTwitter} from  "react-icons/fa6"
import {FaInstagram} from  "react-icons/fa6"


const NavBar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a target='_blank' href='https://www.linkedin.com/in/ankur-borah-b83bb221b/'><FaLinkedin /></a>
            <a target='_blank' href='https://github.com/borahankur'><FaGithub /></a>
            <a target='_blank' href='https://www.instagram.com/an.bo09/'><FaInstagram /></a>
            <a target='_blank' href='https://x.com/borahere9'><FaXTwitter /></a>
        </div>
    </nav>
}

export default NavBar