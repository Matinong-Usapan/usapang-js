import { NavLink } from "react-router-dom";

type NavBarProps = {};

export default function NavBar({
    //props, // Currently unused and shape is not yet defined. This component should not and will not accept children as well.
    }: NavBarProps
    ) {
    return <div className="nav-bar flex">
        <NavLink to="/" end className={"p-[1em]"}>
            {"Dashboard"}
        </NavLink>
        <NavLink to="/user" end className={"p-[1em]"}>
            {"My Profile"}
        </NavLink>
        <NavLink to="/sandbox" end className={"p-[1em]"}>
            {"Dev Sandbox"}
        </NavLink>
    </div>;
}
