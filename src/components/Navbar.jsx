import ButtonComponent from "./ButtonComponent"
import LogoImg from "./LogoImg"

const Navbar = () =>{
    return (
        <nav>
            <ul>
                <li><ButtonComponent content="Home"/></li>
                <li><ButtonComponent content="Sezione"/></li>
                <li><ButtonComponent content="Info"/></li>
                <li><ButtonComponent content="Contatti" /></li>
            </ul>
            <LogoImg/>
            <LogoImg/>
            <LogoImg/>
            <form>
                <input type="text" placeholder="search" />
                <ButtonComponent content="Cerca" />
            </form>
        </nav>
    )
}

export default Navbar