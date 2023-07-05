import React from "react";
import NavBar from "../Components/navBar";
import Connections from "../Components/connections";
import RightSideNav from "../Components/rightSidenav";
 const friendspage=()=>{
    return(
        <>
        <NavBar/>
        <div style={{display:'grid',gridTemplateColumns:"800px 400px",justifyContent:'center'}}>  
        <Connections addMarginTop={true}/>
        <RightSideNav hasMarginTop={true}/>
        </div>
    </>
    )
    
}
export default friendspage;