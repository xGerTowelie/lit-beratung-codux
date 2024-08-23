import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function Inputs() {
    return (
        <div className="w-1/2 mx-auto my-8 flex flex-col gap-8 DWslLitBeratungCoduxBoardsInputsBoard_div1">
            <Checkbox />
            <Input placeholder="Username" />
            <Button text="Download" />
        </div>

    )
}
