type CheckboxProps = {
    text: string
    checked: boolean
}

export default function Checkbox(props: CheckboxProps) {
    return (
        <div className="space-y-2">
            <label
                htmlFor="Option1"
                className="flex cursor-pointer items-center gap-4"
            >
                <input
                    type="checkbox"
                    checked={props.checked}
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                />
                <strong className="font-medium text-gray-900">
                    {props.text}
                </strong>
            </label>
        </div>
    )
}
