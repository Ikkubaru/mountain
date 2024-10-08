import { NavContainer,Menu,MenuList, Logo } from "./Navbar.styled";
export default function Navbar(){
    return(
        <>
        <NavContainer>
        <div>
            <Logo>MNTN</Logo>
        </div>
        <div>
            <Menu>
                <li><MenuList href="">Equipment</MenuList></li>
                <li><MenuList href="">About Us</MenuList></li>
                <li><MenuList href="">Blog</MenuList></li>
            </Menu>
        </div>
        <div>
            <h4><MenuList href="">Account</MenuList></h4>
        </div>
        </NavContainer>
        </>
    )
}