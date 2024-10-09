import { MenuSide} from "./SideMenu.styled"
import { FaInstagram, FaTwitter } from 'react-icons/fa';
export default function SideMenu(){
    return(
        <>
        <MenuSide>
            <h3>Follow us</h3>
            <FaInstagram/>
            <FaTwitter/>
        </MenuSide>
        </>
    )
}