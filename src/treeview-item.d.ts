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
    private internalChecked;
    private internalCollapsed;
    private internalChildren;
    name: string;
    id: any;
    constructor(item: TreeItem, autoCorrectChecked?: boolean);
    checked: boolean;
    readonly indeterminate: boolean;
    public setCheckedRecursive(value: boolean): void;
    disabled: boolean;
    collapsed: boolean;
    setCollapsedRecursive(value: boolean): void;
    children: TreeviewItem[];
    public getSelection(): TreeviewSelection;
    correctChecked(): void;
    private getCorrectChecked;
}
