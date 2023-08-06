export interface DropdownProps {
    title: string;
    options: string[];
    selectionMode?: SelectionMode;
    required?: boolean;
}

export enum SelectionMode {
    SingleSelect = 'Single-Select',
    MultiSelect = 'Multi-Select'
}