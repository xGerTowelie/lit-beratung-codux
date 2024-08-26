"use client"

import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"
import Heading1 from "../../components/Heading1"
import Heading2 from "../../components/Heading2"
import Heading3 from "../../components/Heading3"
import Heading4 from "../../components/Heading4"
import Heading5 from "../../components/Heading5"
import Input from "../../components/Input"
import InputPassword from "../../components/InputPassword"
import InputEmail from "../../components/InputEmail"
import VerticalSpacer from "../../components/VerticalSpacer"
import CheckboxGroup from "../../components/CheckboxGroup"
import { useAlertStore } from "../../stores/alerts.store"

export default function Inputs() {
    const addAlert = useAlertStore((state: any) => state.addAlert)

    const handleClick = () => {
        addAlert({ id: 2, message: "lol" }, 2500)
    }

    return (
        <div className="w-1/2 mx-auto my-8 flex flex-col gap-8 DWslLitBeratungCoduxBoardsInputsBoard_div1">
            <Heading1 text="First Heading" />
            <VerticalSpacer />
            <Heading2 text="Second Heading" />
            <VerticalSpacer />
            <Heading3 text="Third Heading" />
            <VerticalSpacer />
            <Heading4 text="Fourth Heading" />
            <VerticalSpacer />
            <Heading5 text="Fifth Heading" />
            <VerticalSpacer />
            <Checkbox text="single checkbox" checked={true} />
            <VerticalSpacer />
            <CheckboxGroup items={["first", "second", "third"]} initial={0} />
            <VerticalSpacer />
            <Input placeholder="Username" />
            <VerticalSpacer />
            <InputPassword />
            <VerticalSpacer />
            <InputEmail />
            <VerticalSpacer />
            <Button onClick={handleClick} text="Download" />
            <VerticalSpacer />
        </div>

    )
}
