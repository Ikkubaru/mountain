import {FirstContainer,ContainerOne, FirstImage, Paragraph, Linked, LargeText, Start, NumberOne, Line} from "./First.styled"
import ImageOne from "/src/assets/01.png"

export default function First(){
    return(
        <>
        <FirstContainer>
            <ContainerOne>
            <div>
                <NumberOne>01</NumberOne>
                <Start><Line/>GET STARTED</Start>
                <LargeText>What level of hiker are you?</LargeText>
                <Paragraph>
                Determining what level of hiker you are can be an important tool when planning <br />
                future hikes. This hiking level guide will help you plan hikes according to <br /> 
                different hike ratings set by various websites like All Trails and Modern Hiker. <br />
                What type of hiker are you? novice, moderate, advanced moderate, expert, <br />
                or expert backpacker?
                </Paragraph> <br />
                <Linked href="">
                    read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Linked>
            </div>
            <div>
                <FirstImage src={ImageOne}/>
            </div>
            </ContainerOne>
        </FirstContainer>
        </>
    )
}