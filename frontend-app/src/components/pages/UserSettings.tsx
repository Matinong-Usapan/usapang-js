import PlaceholderTextDiv from "../PlaceholderTextDiv";

type UserSettingsProps = React.PropsWithChildren<{}>;

export default function UserSettings({
    //children
    }: UserSettingsProps
    ) {
    return <div className="user-settings-page flex justify-center items-center">
        <PlaceholderTextDiv placeholderText="User Settings" />
    </div>;
}
