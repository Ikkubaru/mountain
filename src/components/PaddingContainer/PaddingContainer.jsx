import { Padding } from "./PaddingContainer.styled";

export default function PaddingContainer({children}){
    return(
        <>
        <Padding>
            {children}
        </Padding>
        </>
    )
}