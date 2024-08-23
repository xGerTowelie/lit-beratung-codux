import Navigation from '../components/Navigation'
import ContentLayout from '../components/ContentLayout'

export default function App() {
    return (
        <div>
            <Navigation />
            <div className="px-12">
                <ContentLayout />
            </div>
        </div>
    );
}

