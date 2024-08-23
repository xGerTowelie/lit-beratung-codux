"use client"

import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import { useAlertStore } from "../../stores/alerts.store";

export default function Inputs() {
    const addAlert = useAlertStore((state: any) => state.addAlert)

    const handleClick = () => {
        addAlert({ id: 2, message: "lol" }, 2500)
    }

    return (
        <div className="w-1/2 mx-auto my-8 flex flex-col gap-8 DWslLitBeratungCoduxBoardsInputsBoard_div1">
            <Checkbox />
            <Input placeholder="Username" />
            <Button onClick={handleClick} text="Download" />
        </div>

    )
}
