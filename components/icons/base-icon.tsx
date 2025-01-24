import { ReactNode, SVGProps } from 'react'

type CustomProps = {
    width?: string;
    height?: string;
};

export default function BaseIcon({ children, ...props }: {
    children: ReactNode,
    props?: CustomProps
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            viewBox={`0 0 ${props.width} ${props.height}`}
        >
            {children}
        </svg>
    )
}