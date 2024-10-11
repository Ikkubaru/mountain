import { CopyRight, FooterContainer, FooterLinked, FooterMenu, FooterPart, FooterTitle, ListFooterMenu, LogoFooter, Paragraph } from "./Footer.styled";

export default function Footer(){
    return(
        <>
        <FooterPart>
            <FooterContainer>
                <div>
                    <LogoFooter>MNTN</LogoFooter> <br />
                    <Paragraph>Get out there & discover your next<br/>
                    slope, mountain & destination!
                    </Paragraph> <br />
                    <CopyRight>Copyright 2023 MNTN, Inc. Terms & Privacy</CopyRight>
                 </div>

            <div>
                <FooterTitle>More on The Blog</FooterTitle>
                <ul>
                    <ListFooterMenu><FooterLinked href="">About MNTN</FooterLinked></ListFooterMenu>
                    <ListFooterMenu><FooterLinked href="">Contributions & Writers</FooterLinked></ListFooterMenu>
                    <ListFooterMenu><FooterLinked href="">Write For Us</FooterLinked></ListFooterMenu>
                    <ListFooterMenu><FooterLinked href="">Contact Us</FooterLinked></ListFooterMenu>
                    <ListFooterMenu><FooterLinked href="">Privacy PoListFooterMenucy</FooterLinked></ListFooterMenu>
                </ul>
            </div>
            <FooterMenu>
                <FooterTitle>More on MNTN</FooterTitle>
                <ul>
                    <ListFooterMenu><FooterLinked href="">The Team</FooterLinked></ListFooterMenu>
                    <ListFooterMenu><FooterLinked href="">Jobs</FooterLinked></ListFooterMenu>
                    <ListFooterMenu><FooterLinked href="">Press</FooterLinked></ListFooterMenu>
                </ul>
            </FooterMenu>
            </FooterContainer>
        </FooterPart>
        </>
    )
}