import TextInput from '../../components/inputs/TextInput';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Inputs',
    Board: () => (
        <div className="flex flex-col gap-8">
            <TextInput placeholder="Enter text" />
        </div>
    ),
    isSnippet: true,
});
