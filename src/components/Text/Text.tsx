import Rightmenu from "../SideMenu/Rightmenu.tsx";
import { Scroll, SubText, SubTitle, Line } from "./Text.styled.ts";
export default function Text(){
    return(
        <>
        <section>
            <SubText>
                <SubText> <Line/>  A HIKING GUIDE</SubText>
            </SubText>
            <SubTitle>
                Be Prepared For The <br />
                Mountains And Beyond!
            </SubTitle>
            <Scroll>
                scroll down 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </Scroll>
        </section>
        <Rightmenu/>
        </>
    )
}