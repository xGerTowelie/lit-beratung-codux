import { createBoard } from '@wixc3/react-board';
import Navigation from '../../components/Navigation';

export default createBoard({
    name: 'Navigation',
    Board: () => (
        <Navigation />
    ),
    isSnippet: true,
});

