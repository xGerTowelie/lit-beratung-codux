import { HeadingProps } from "./Heading1";

export default function Heading2(props: HeadingProps) {
    return (
        <h2 className="text-4xl capitalize">{props.text}</h2>
    )
}
