import './styles.css';

type ButtonProps = {
    variation?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export default function YButton({ variation, children }: ButtonProps) {
    return (
        <button
            className={`btn btn-${variation}`}
        >
            {children}
        </button>
    )
}