import { Scroll, SubText, SubTitle } from "./Text.styled.ts";
export default function Text(){
    return(
        <>
        <section>
            <SubText>
                <SubText>--- A HIKING GUIDE</SubText>
            </SubText>
            <SubTitle>
                Be Prepared For The <br />
                Mountains And Beyond!
            </SubTitle>
            <Scroll>
                scroll down |
            </Scroll>
        </section>

        </>
    )
}