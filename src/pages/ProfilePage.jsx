import React from "react";
import Header from "../components//heder";
import Footer from "../components/footer";
import ProfileCard from "../components/ProfileCard";
import ProfileInfo from "../components/ProfileInfo";

const ProfileP = ()=>{
    return(
        <div>
            <Header/>
            <h2 className="text-center text-white bg-primary m-2">Личный кабинет</h2>
            <pre></pre>
            <ProfileInfo/>
            <h2 className="text-center text-white bg-primary m-2">Объявления пользователя</h2>
            <pre></pre>
            <ProfileCard/>
                <Footer/>
        </div>
    );
};
export default ProfileP;