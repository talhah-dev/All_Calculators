import Navbar from '@/components/Navbar';
import React from 'react'

interface WrapperProps {
    children: React.ReactNode;
    className?: string
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
    return (
        <div>
            <Navbar />
            <div className={`${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper