import PlaceholderTextDiv from "../PlaceholderTextDiv";

type DashboardProps = React.PropsWithChildren<{}>;

export default function Dashboard({
    //children
    }: DashboardProps
    ) {
    return <div className="dashboard" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <PlaceholderTextDiv placeholderText="Dashboard" />
    </div>;
}
