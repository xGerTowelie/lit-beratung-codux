import { HeadingProps } from "./Heading1"

export default function Heading3(props: HeadingProps) {
    return (
        <h3 className="text-3xl capitalize">{props.text}</h3>
    )
}
