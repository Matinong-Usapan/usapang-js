import NavBar from "./NavBar";
import { Outlet } from "react-router";

type NavWrapperProps = {};

/**
 * A component that wraps a NavBar with a div and provides a slot for child elements.
 * The NavBar is placed in a div with className "nav-wrapper" which is then wrapped
 * in another div. The child elements are placed in the inner div.
 *
 * @example
 * <NavWrapper>
 *   <p>This is a child element.</p>
 * </NavWrapper>
 *
 * @returns A JSX element containing a NavBar and a slot for child elements.
 */
export default function NavWrapper({
    //children
    }: NavWrapperProps
    ) {
    return <div className="nav-wrapper" style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
        <div>
            <NavBar/>
        </div>
        {
        // Here, we use the <Outlet> component instead of {children} to tell React Router where to render its routed components.
        }
        <div style={{width: "100%", height: "100%", backgroundColor: "#666666"}}><Outlet /></div>
    </div>;
}
