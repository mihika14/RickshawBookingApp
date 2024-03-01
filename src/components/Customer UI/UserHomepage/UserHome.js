import React from "react";
import UserHeader from "./UserHeader";
import UserTable from "../UserTable/UserTable";
import './UserHomepage.css'
import FareCalculator from "../UserTable/FareCalculator";

function UserHome (){
    return(
        <div className="header-home"><UserHeader/>
        <div className="user-homepage">
        <div className="user-table"><UserTable/></div>
        <div className="user-fare"><FareCalculator/></div>
        </div>
        </div>
    )
}

export default UserHome;