import "./Header.css";
import logo from "../../assets/LogoTemp.png"

const Header = () => {
    return (
    <div id="header">
        
    <img src ={logo} alt="Logo"></img>
    <div id = "AI-description">
        <h3>AI Name+Description</h3> 
    </div>
        <div id = "project-name">
            <h2>Project Name</h2>
        </div>
    </div>
    )
}

export default Header;