import PlaceholderTextDiv from "../PlaceholderTextDiv";

type UserProfileProps = React.PropsWithChildren<{}>;

export default function UserProfile({
    //children
    }: UserProfileProps
    ) {
    return <div className="user-profile" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <PlaceholderTextDiv placeholderText="User Profile" />
    </div>;
}
