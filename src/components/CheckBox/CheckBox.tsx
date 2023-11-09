import { FC, memo } from 'react';
import styles from './CheckBox.module.scss';
import classNames from 'classnames';
import State from '../../store/State';
import { observer } from 'mobx-react-lite';

interface Option {
    text: string;
    value: number;
}

interface CheckboxProps {
    options: Option[];
    selectedValue: number | null
    onChange?: (value: number) => void;
}

const CheckBox: FC<CheckboxProps> = observer(({ options, onChange, selectedValue }) => {

    const handleOptionChange = (value: number) => {
        onChange?.(value);
    };

    return (
        <div className={styles.checkbox_wrapper}>
            {options?.map(({ text, value }) => (
                <div
                    key={value}
                    className={classNames(
                        styles.checkbox_item,
                        State.getIsCorrect() !== null && value !== selectedValue ? styles.checkbox_item_active : ''
                    )}
                    onClick={() => handleOptionChange(value)}
                >
                    <div
                        className={classNames(styles.checkbox,
                            {
                                [styles.checkbox_active]: value === selectedValue,
                                [styles.checkbox_wrong]: State.getIsCorrect() === false && State.getIsCorrect() !== null && value === selectedValue,
                                [styles.checkbox_correct]: State.getIsCorrect() !== null && State.getIsCorrect() && value === selectedValue,
                            }
                        )}
                    />
                    <p className={styles.option}>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </p>
                </div>
            ))}
        </div>
    );
});

export default memo(CheckBox);