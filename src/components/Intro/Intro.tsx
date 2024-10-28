import Container from "../Container/Container";
import React, { useState, useEffect } from "react";
import {Bg, Containerone, Secondbg} from "./Intro.styled"

export default function Intro(){
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
            <Containerone>
                <Bg style={{ backgroundPositionY: offsetY * -0.2 }}>
                    <Container/>
                </Bg>
                <Secondbg style={{ backgroundPositionY: offsetY * 0.1 }}/>
            </Containerone>
        </>
    )
}