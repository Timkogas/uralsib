import { type ButtonHTMLAttributes, type FC } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import btnSmall from '../../../assets/images/btn-small.png'

type ButtonProps = {
    className?: string;
    text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = props => {
    const {
        className,
        text,
        ...otherProps
    } = props


    return (
        <button
            className={classNames(styles.button, className)}
            {...otherProps}
        >
            <img className={styles.img} src={btnSmall}/>
            <span className={styles.text}>{text}</span>
        </button>
    )
}

export default Button
