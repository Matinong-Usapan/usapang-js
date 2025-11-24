import PlaceholderTextDiv from "../PlaceholderTextDiv";

type UserSettingsProps = React.PropsWithChildren<{}>;

export default function UserSettings({
    //children
    }: UserSettingsProps
    ) {
    return <div className="user-settings" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <PlaceholderTextDiv placeholderText="User Settings" />
    </div>;
}
