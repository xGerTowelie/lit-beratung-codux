export interface NewComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export const NewComponent = ({
    children = 'NewComponent',
}: NewComponentProps) => {
    return <div className="text-center">{children}</div>;
};
