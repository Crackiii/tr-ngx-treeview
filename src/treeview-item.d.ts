export interface TreeviewSelection {
    checkedItems: TreeviewItem[];
    uncheckedItems: TreeviewItem[];
}
export interface TreeItem {
    name: string;
    id: any;
    disabled?: boolean;
    checked?: boolean;
    collapsed?: boolean;
    children?: TreeItem[];
}
export declare class TreeviewItem {
    private internalDisabled;
    public internalChecked = false;
    public internalCollapsed;
    public internalChildren;
    name: string;
    id: any;
    constructor(item: TreeItem, autoCorrectChecked?: boolean);
    checked: boolean = false;
    readonly indeterminate: boolean;
    setCheckedRecursive(value: boolean): void;
    disabled: boolean;
    collapsed: boolean = false;
    setCollapsedRecursive(value: boolean): void;
    children: TreeviewItem[];
    getSelection(): TreeviewSelection;
    correctChecked(): void;
    private getCorrectChecked;
}
