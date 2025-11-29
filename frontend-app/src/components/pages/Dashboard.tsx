import PlaceholderTextDiv from "../PlaceholderTextDiv";

type DashboardProps = React.PropsWithChildren<{}>;

export default function Dashboard({
    //children
    }: DashboardProps
    ) {
    return <div className="dashboard flex justify-center items-center">
        <PlaceholderTextDiv placeholderText="Dashboard" />
    </div>;
}
