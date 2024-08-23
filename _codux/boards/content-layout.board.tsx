import ContentLayout from '../../components/ContentLayout';
import './content-layout.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Content-Layout',
    Board: () => (
        <ContentLayout />
    ),
    isSnippet: true,
});
