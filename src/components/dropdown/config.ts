type SelectionChangeCallback = (options: string[]) => void;

export interface DropdownProps {
    title: string;
    options: string[];
    selectionMode?: SelectionMode;
    required?: boolean;
    defaultText?: string;
    onSelectionChange?: SelectionChangeCallback;
}

export enum SelectionMode {
    SingleSelect = 'Single-Select',
    MultiSelect = 'Multi-Select'
}