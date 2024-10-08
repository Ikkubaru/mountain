import SideMenu from "../SideMenu/SideMenu";
import Navbar from "../Navbar/Navbar"
import Text from "../Text/Text";
import {Title} from "../Text/Text.styled.js" 
export default function Container(){
    return(
        <>
        <section>
            <Navbar/>
            <Title>
                <SideMenu/>
                <Text/>
            </Title>
        </section>
        </>
    )
}