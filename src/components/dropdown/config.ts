export interface DropdownProps {
    title: string;
    options: string[];
    selectionMode?: SelectionMode;
    required?: boolean;
    defaultText?: string;
}

export enum SelectionMode {
    SingleSelect = 'Single-Select',
    MultiSelect = 'Multi-Select'
}