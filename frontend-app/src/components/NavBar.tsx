import { NavLink } from "react-router-dom";

type NavBarProps = {};

export default function NavBar({
    //props, // Currently unused and shape is not yet defined. This component should not and will not accept children as well.
    }: NavBarProps
    ) {
    return <div className="nav-bar" style={{display: "flex"}}>
        <NavLink to="/" end style={{padding: "1em"}}>
            {"Dashboard"}
        </NavLink>
        <NavLink to="/user" end style={{padding: "1em"}}>
            {"My Profile"}
        </NavLink>
    </div>;
}
