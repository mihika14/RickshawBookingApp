import LocationTime from "../Location&Time/Location&Time";
import RatingsTable from "../RatingsTable/RatingsTable";
import './DriverHomepage.css';
import HomeHeader from "./HomeHeader";

function DriverHomepage() {
    return (
        <>
        <div className="header-home"><HomeHeader/></div>
        <div className="driverhomepage">
        <div className="left-side">
            <LocationTime />
        </div>
        <div className="right-side">
            <h1 className="top-ratings">Driver Ratings </h1>
            <RatingsTable />
        </div>
    </div>
        </>
        
    );
}

export default DriverHomepage;
