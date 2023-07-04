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
        <div style={{ display: 'grid', gridTemplateColumns: ' auto 1fr auto ' }}>
          <div>
          <ProfileSideNav/>
          </div>
          <div >
            <TextPost />
            <Post />
          </div>
      <div>
        <RightSideNav hasMargin={true}/>
      </div>
        </div>
      </>
    );
  }
  export default homePage;