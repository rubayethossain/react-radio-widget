import * as React from 'react';
import styles from './Typography.module.css';

type Props = {
    children: string,
    style?: React.CSSProperties,
    className?: string
}

const StationName = (props: Props) => {
    const {children, className, style} = props;

    const composedClassName = React.useMemo(() => {
        const defaultClass = styles.stationName;

        return className ? `${defaultClass} ${className}` : defaultClass;
    }, [className])
    
    return (
        <p className={composedClassName} style={style}>
           {children} 
        </p>
    )
}

export default StationName
