import React from "react";
import NavBar from "../Components/navBar";
import TextPost from "../Components/textPost";
import Post from "../Components/Post"
import ProfileSideNav from "../Components/profileSideNav";
import RightSideNav from "../Components/rightSidenav";
function homePage() {
  

  return (
    <>
      <NavBar />
      <div style={{ display: 'grid', gridTemplateColumns: ' auto 1fr auto ', gridTemplateRows: 'repeat(50,auto)' }}>
        <div style={{ gridRow: '1', gridColumn: '1 ' }}>
          <ProfileSideNav />
        </div>
        <div style={{ gridRow: '1', gridColumn: '2 ' }}>
          <TextPost />
          <Post/>
          
        </div>
        <div>
          <RightSideNav hasMarginTop={true} hasMarginRight={true} />
        </div>
      </div>
    </>

  );
}
export default homePage;