import Navigation from '../components/Navigation'
import ContentLayout from '../components/ContentLayout'
import Heading1 from '../components/Heading1';

export default function App() {
    return (
        <div>
            <Navigation />
            <div className="px-24 mt-12">
                <ContentLayout>
                    <Heading1>test</Heading1>

                </ContentLayout>
            </div>
        </div>
    );
}

