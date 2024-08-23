import React from "react"
import './inputs.board.css'
import { createBoard } from '@wixc3/react-board'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default createBoard({
    name: 'Inputs',
    Board: () => (
        <div className="flex flex-col gap-8 DWslLitBeratungCoduxBoardsInputsBoard_div1">
            <Checkbox />
            <Input placeholder="Username" />
            <Button text="Download" />
        </div>
    ),
    isSnippet: true,
})
