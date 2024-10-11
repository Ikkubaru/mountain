import { SecondContainer, SecondImage, ContainerTwo, Two, Linked, LargeText, Paragraph, More } from "./Second.styled";


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
            <Linked href="">--HIKING ESENTIALS
                </Linked>
        <LargeText>Picking the right <br />
                    Hiking Gear!
            </LargeText>
        <Paragraph>
        The nice thing about beginning hiking is that you don’t really need any <br />
        special gear, you can probably get away with things you already have. <br />
        Let’s start with clothing. A typical mistake hiking beginners make is wearing <br />
        jeans and regular clothes, which will get heavy and chafe wif they get sweaty <br />
        or wet.
        </Paragraph> <br />
            <More href="">read more -</More>
        </div>
            </ContainerTwo>
        </SecondContainer>
        </>
    )
}