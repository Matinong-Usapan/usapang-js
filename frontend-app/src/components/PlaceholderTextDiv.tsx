type PlaceholderTextDivProps = React.PropsWithChildren<{
    placeholderText?: string
}>;

export default function PlaceholderTextDiv({
    placeholderText,
    //children
    }: PlaceholderTextDivProps
    ) {
    return <div className={"inline-block p-[1em]"}>{placeholderText ? `Placeholder for ${placeholderText}.` : "Placeholder with no text provided."}</div>;
}
