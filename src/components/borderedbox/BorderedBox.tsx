import { ReactNode } from 'react';
import style from './BorderedBox.module.scss'

interface BorderedBoxProps {
    children: ReactNode
} 

const BorderedBox = ({children}:BorderedBoxProps) => {
    return (
        <div className={style.BorderedBox}>
            {children}
        </div>
    );
};

export default BorderedBox;