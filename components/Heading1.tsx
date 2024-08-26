export type HeadingProps = {
    text: string
}

export default function Heading1(props: HeadingProps) {
    return (
        <h1 className="text-5xl capitalize">{props.text}</h1>
    )
}
