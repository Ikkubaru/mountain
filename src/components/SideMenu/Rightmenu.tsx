import {  Menuright } from "./Rightmenu.styled"
import ProgressBar from "./ProgressComponent"
export default function Rightmenu(){
    return(
        <>
        <Menuright>
            <div style={{ height: '100px' }}></div>
            <h3>Start</h3>
            <h3>01</h3>
            <ProgressBar/>
            <h3>02</h3>
            <h3>03</h3>
        </Menuright>
        </>
    )
}