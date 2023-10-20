import { type ButtonHTMLAttributes, type FC } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import btnSmall from '../../../assets/images/btn-small.png'
import btnBig from '../../../assets/images/btn-big.png'

type ButtonProps = {
    className?: string;
    text?: string;
    big?: boolean;
    disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = props => {
    const {
        className,
        text,
        big,
        disabled,
        ...otherProps
    } = props


    return (
        <button
            className={classNames(styles.button, className, {[styles.button_big]: big, [styles.disabled]: disabled})}
            {...otherProps}
        >
            {big ? <img className={styles.img} src={btnBig} /> : <img className={styles.img} src={btnSmall} />}
            <span className={styles.text}>{text}</span>
        </button>
    )
}

export default Button
