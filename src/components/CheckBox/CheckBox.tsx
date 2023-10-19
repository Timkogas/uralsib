import { FC, memo } from 'react';
import styles from './CheckBox.module.scss';
import classNames from 'classnames';

interface Option {
    text: string;
    value: number;
}

interface CheckboxProps {
    options: Option[];
    selectedValue: number | null
    onChange?: (value: number) => void;
}

const CheckBox: FC<CheckboxProps> = ({ options, onChange, selectedValue }) => {

    const handleOptionChange = (value: number) => {
        onChange?.(value);
    };

    return (
        <div className={styles.checkbox_wrapper}>
            {options.map(({ text, value }) => (
                <div key={value} className={styles.checkbox_item}>
                    <div
                        className={classNames(styles.checkbox, {[styles.checkbox_active]: value === selectedValue})}
                        onClick={() => handleOptionChange(value)}
                    />
                    <p className={styles.option}>
                        {text}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default memo(CheckBox);