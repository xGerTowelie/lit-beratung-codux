import { createBoard } from '@wixc3/react-board';
import Navigation from '../../components/Navigation';
import ContentLayout from '../../components/ContentLayout';

export default createBoard({
    name: 'Spesen',
    Board: () => (
        <div>
            <Navigation />
            <div className="w-2/3 mx-auto mt-12">
                <ContentLayout>

                </ContentLayout>
            </div>
        </div>
    ),
    isSnippet: true,
});
