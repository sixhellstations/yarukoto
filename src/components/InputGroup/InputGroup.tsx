import { ChangeEvent, KeyboardEvent, memo, useState } from 'react';
import { InputGroupProps } from './InputGroup.types';
import './InputGroup.scss';

const InputGroup = ({
    buttonText,
    action,
    placeholder = '',
    buttonClassName = '',
    inputClassName = '',
    initialValue = '',
    autoFocus = false,
    clearInputAfterAction
}: InputGroupProps) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleAction = () => {
        action(inputValue);
        if (clearInputAfterAction) setInputValue('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAction();
        }
    };
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="input-group">
            <input
                className={inputClassName}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={inputValue}
                onKeyDown={handleKeyDown}
                autoFocus={autoFocus}
            />
            <button className={buttonClassName} type="button" onClick={handleAction}>
                {buttonText}
            </button>
        </div>
    );
};

export default memo(InputGroup);
