export interface InputGroupProps {
    buttonText: string;
    action: (text: string) => void;
    placeholder?: string;
    inputClassName?: string;
    buttonClassName?: string;
    initialValue?: string;
    autoFocus?: boolean;
    clearInputAfterAction?: boolean;
}
