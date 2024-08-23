import { Input } from "../shadcn/input"

type TextInputProps = {
    placeholder?: string
}

export default function TextInput(props: TextInputProps) {
    return <Input type="text" placeholder={props.placeholder} />
}
