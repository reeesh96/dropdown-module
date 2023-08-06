"use client";

import { useState, useRef } from "react";
import { DropdownProps, SelectionMode } from "./config";
import './index.css'
import { setToString } from "@/utils/setToString";
import { useClickAway } from "@/hooks/useClickAway";

export default function Dropdown(props: DropdownProps) {
    const { title, options, selectionMode, defaultText, onSelectionChange, required } = props
    const [ isCollapsed, setIsCollapsed ] = useState(true)
    const [ selectedItems, _setSelectedItems ] = useState(new Set<string>())
    const [ selectionResultString, setSelectionResultString ] = useState(defaultText ?? '')
    const menuRef = useRef(null);
    useClickAway(menuRef, () => {
        setIsCollapsed(true)
    })

    function handleItemClick(item: string) {
        if (selectionMode === SelectionMode.SingleSelect) {
            selectedItems.clear()
            selectedItems.add(item)
        } else if (selectionMode === SelectionMode.MultiSelect) {
            if (selectedItems.has(item)) {
                selectedItems.delete(item)
            } else {
                selectedItems.add(item)
            }
        }

        onSelectionChange?.(Array.from(selectedItems))

        setSelectionResultString(setToString(selectedItems, ', ') ?? defaultText ?? '')
    }

    function handleSelectAllClick() {
        if (allSelected()) {
            selectedItems.clear()
        } else {
            selectedItems.clear()
            for(const item of options) {
                selectedItems.add(item)
            }
        }

        onSelectionChange?.(Array.from(selectedItems))
        setSelectionResultString(setToString(selectedItems, ', ') ?? defaultText ?? '')
    }

    function allSelected(): boolean {
        return selectedItems.size === options.length
    }

    return (
        <div className="dropdown-container">
            <div className="flex flex-row">
                <p>{title}</p>
                {required && (
                    <p className="text-red-500">*</p>
                )}
            </div>
            <div className="relative w-full h-fit">
                <div
                    className="dropdown-element"
                    onClick={() => setIsCollapsed(false)}
                >
                    <div className="w-full h-full overflow-hidden whitespace-nowrap text-ellipsis">
                        { selectionResultString }
                    </div>
                    {
                        // Use up arrow (&#9650) or down arrow (&#9660)
                        isCollapsed ? (
                            <p className="text-sm">&#9660;</p>
                        ) : (
                            <p className="text-sm">&#9650;</p>
                        )
                    }
                </div>
                <div ref={menuRef} hidden={isCollapsed} className="dropdown-menu-container">
                    <div className="flex flex-col items-start">
                        {
                            (selectionMode === SelectionMode.MultiSelect && options.length > 0) && (
                                <div
                                    className="dropdown-menu-item"
                                    key={'select_all_option'}
                                    onClick={() => handleSelectAllClick()}
                                >
                                    <input readOnly checked={allSelected()} type='checkbox'></input>
                                    <div>{'Select All'}</div>
                                </div>
                            )
                        }
                        {
                            options.map((option, index) => {
                                return (
                                    <div
                                        className={`dropdown-menu-item${selectedItems.has(option) ? '_selected' : ''}`}
                                        key={`${option}_${index}`}
                                        onClick={() => handleItemClick(option)}
                                    >
                                        {selectionMode === SelectionMode.MultiSelect && (
                                            <input readOnly checked={selectedItems.has(option)} type='checkbox'></input>
                                        )}
                                        <div>{option}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}