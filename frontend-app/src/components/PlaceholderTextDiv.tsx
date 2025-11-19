type PlaceholderTextDivProps = React.PropsWithChildren<{
    placeholderText?: string
}>;

export default function PlaceholderTextDiv({
    placeholderText,
    //children
    }: PlaceholderTextDivProps
    ) {
    return <div className="placeholder-text-div" style={{display: "inline-block", padding: "1em"}}>{placeholderText ? `Placeholder for ${placeholderText}.` : "Placeholder with no text provided."}</div>;
}
