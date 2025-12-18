type NotFoundProps = React.PropsWithChildren<{}>;

export default function NotFound({
    //children
    }: NotFoundProps
    ) {
    return <div className="user-profile-page flex justify-center items-center">
        <div className={"inline-block p-[1em]"}>{"404: Page not found."}</div>
    </div>;
}
