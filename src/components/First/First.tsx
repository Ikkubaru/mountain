import {FirstContainer,ContainerOne, FirstImage, Paragraph, Linked, LargeText, Start, NumberOne} from "./First.styled"

export default function First(){
    return(
        <>
        <FirstContainer>
            <ContainerOne>
            <div>
                <NumberOne>01</NumberOne>
                <Start>---GET STARTED</Start>
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
                </Linked>
            </div>
            <div>
                <FirstImage/>
            </div>
            </ContainerOne>
        </FirstContainer>
        </>
    )
}