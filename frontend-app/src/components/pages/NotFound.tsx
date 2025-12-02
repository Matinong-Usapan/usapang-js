type NotFoundProps = React.PropsWithChildren<{}>;

export default function NotFound({
    //children
    }: NotFoundProps
    ) {
    return <div className="user-profile" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div  style={{display: "inline-block", padding: "1em"}}>{"404: Page not found."}</div>
    </div>;
}
