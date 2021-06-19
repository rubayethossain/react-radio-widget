import { useMemo } from "react";
import styles from './IconButton.module.css';

type Props = {
    icon: string,
    alt?: string,
    onClick: () => void,
    width?: string, 
    height?: string, 
    className?: string
}

const IconButton = (props: Props) => {
    const {icon, alt, onClick, width, height, className} = props;

    const iconStyle = {
        width,
        height
    }

    const buttonClass = useMemo(() => {
        return className ? `${styles.button} ${className}` : styles.button
    }, [className])

    return (
        <button onClick={onClick} className={buttonClass}>
            <img src={icon} alt={alt} style={iconStyle} />
        </button>
    )
}

IconButton.defaultProps = {
    alt: "",
    width: "auto",
    height: "35px"
}

export default IconButton
