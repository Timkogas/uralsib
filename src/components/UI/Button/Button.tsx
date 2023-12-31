import { type ButtonHTMLAttributes, type FC } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import btnSmall from '../../../assets/images/btn-small.png'
import btnBig from '../../../assets/images/btn-big.png'
import btnBigG from '../../../assets/images/btn-big-green.png'
import btnMedium from '../../../assets/images/btn-medium.png'

type ButtonProps = {
    className?: string;
    text?: string;
    big?: boolean;
    medium?: boolean;
    disabled?: boolean;
    classNameSprite?: string;
    green?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = props => {
    const {
        className,
        text,
        big,
        disabled,
        medium,
        green,
        ...otherProps
    } = props


    return (
        <button
            className={classNames(styles.button, className, { [styles.button_big]: big, [styles.disabled]: disabled,  [styles.button_medium]: medium})}
            {...otherProps}
        >
            {big ? <img className={styles.img} src={green ? btnBigG : btnBig} /> : medium ?  <img className={styles.img} src={btnMedium}/>  : <img className={styles.img} src={btnSmall} />}
            <span className={classNames(styles.text, {[styles.green]: green})}>{text}</span>
        </button>
    )
}

export default Button
