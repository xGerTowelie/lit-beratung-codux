import ContentLayout from '../../components/ContentLayout';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Content-Layout',
    Board: () => (
        <ContentLayout />
    ),
    isSnippet: true,
});
