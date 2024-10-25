import { ThirdContainer,ContainerThree, ThirdImage, NumberThree, SubTitle, Linked, LargeText, Paragraph, Line } from "./Third.styled";
import ImageThree from "/src/assets/03.png"

export default function Third(){
    return(
        <>
        <ThirdContainer>
            <ContainerThree>
                <div>
                <NumberThree>03</NumberThree>
                <SubTitle><Line/> Where You go is the key</SubTitle>
                <LargeText>Understand Your Map & <br />
                    Timing</LargeText>
                <Paragraph>
                To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-<br/>
                Lock bag. Read over the guide, study the map, and have a good idea of what to<br/>
                expect. I like to know what my next landmark is as I hike. For example, I’ll read<br/>
                the guide and know that say, in a mile, I make a right turn at the junction..
                </Paragraph> <br />
                <Linked href="">read more
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.75" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                className="lucide lucide-arrow-right">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Linked>
                </div>
                    <ThirdImage src={ImageThree}/>
            </ContainerThree>
        </ThirdContainer>
        </>
    )
}