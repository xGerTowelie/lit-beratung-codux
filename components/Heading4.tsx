import { HeadingProps } from "./Heading1";

export default function Heading4(props: HeadingProps) {
    return (
        <h4 className="text-2xl capitalize">{props.text}</h4>
    )
}
