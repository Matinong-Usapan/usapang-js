type SandboxProps = React.PropsWithChildren<{}>;

export default function Sandbox({
    //children
    }: SandboxProps
    ) {
    return <div className="sandbox-page flex flex-col w-full h-full p-[1em]">
        <div className="flex w-full h-full bg-gray-600"></div>
    </div>;
}
