import { ReactNode } from "react"

type Heading1Props = {
    children: ReactNode
}
export default function Heading1(props: Heading1Props) {
    return (
        <h1 className="text-3xl capitalize">{props.children}</h1>
    )
}
