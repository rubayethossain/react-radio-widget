import { useMemo } from "react";

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
        return className ? `${className}` : ``
    }, [className])

    return (
        <button onClick={onClick} className={buttonClass}>
            <img src={icon} alt={alt} style={iconStyle} />
        </button>
    )
}

IconButton.defaultProps = {
    alt: "",
    width: "30px",
    height: "auto"
}

export default IconButton
