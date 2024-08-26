"use client"
import { useState } from "react"

type CheckboxGroupProps = {
    items: string[]
    initial: number
}
export default function CheckboxGroup(props: CheckboxGroupProps) {
    const [selected, setSelected] = useState(props.initial)

    if (props.items.length === 0) {
        return <span>provide items to work</span>
    }

    if (props.initial === undefined || props.initial > props.items.length || props.initial < 0) {
        return <span>Incorrect initial index specified!</span>
    }

    return (
        <div className="space-y-2">
            {props.items.map((item, index: number) => (
                <label
                    onClick={() => setSelected(index)}
                    key={index}
                    className="flex cursor-pointer items-center gap-4"
                >
                    <input
                        type="checkbox"
                        checked={index === selected}
                        className="size-4 rounded-xl border-gray-300"
                    />
                    <strong className="font-medium text-gray-900">
                        {item}
                    </strong>
                </label>
            ))}
        </div>
    )
}
