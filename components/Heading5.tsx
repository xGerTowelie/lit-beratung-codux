import { HeadingProps } from "./Heading1"

export default function Heading5(props: HeadingProps) {
    return (
        <h5 className="text-xl capitalize">{props.text}</h5>
    )
}
