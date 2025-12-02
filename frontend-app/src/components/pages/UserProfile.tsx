import { Link } from "react-router";
import PlaceholderTextDiv from "../PlaceholderTextDiv";

type UserProfileProps = React.PropsWithChildren<{}>;

export default function UserProfile({
    //children
    }: UserProfileProps
    ) {
    return <div className="user-profile flex flex-col justify-center items-center">
        <PlaceholderTextDiv placeholderText="User Profile" />
        <div>{"Go to "}<Link to="/user/settings">{"User Settings"}</Link></div>
    </div>;
}
