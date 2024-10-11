import { SecondContainer, SecondImage, ContainerTwo, Two, Linked, LargeText, Paragraph, More, Line } from "./Second.styled";


export default function Second(){
    return(
        <>
        <SecondContainer>
            <ContainerTwo>
        <div>
                <SecondImage  />
            </div>
                <Two>02</Two>
        <div>
            <Linked href=""><Line/> HIKING ESENTIALS
                </Linked>
        <LargeText>Picking the right <br />
                    Hiking Gear!
            </LargeText>
        <Paragraph>
        The nice thing about beginning hiking is that you don’t really need any<br />
        special gear, you can probably get away with things you already have.<br />
        Let’s start with clothing. A typical mistake hiking beginners make is wearing<br />
        jeans and regular clothes, which will get heavy and chafe wif they get sweaty<br />
        or wet.
        </Paragraph> <br />
            <More href="">read more
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </More>
        </div>
            </ContainerTwo>
        </SecondContainer>
        </>
    )
}