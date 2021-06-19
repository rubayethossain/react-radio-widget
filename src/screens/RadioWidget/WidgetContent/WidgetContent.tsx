import RadioStation from '../../../components/RadioStation'
import styles from './WidgetContent.module.css'

const STATION = {
    id: 1,
    frequency: '66,6',
    name: 'Dribble FM'
}

const WidgetContent = () => {
    return (
        <div className={styles.wrapper}>
            <RadioStation {...STATION} activeStation={0} />
        </div>
    )
}

export default WidgetContent
