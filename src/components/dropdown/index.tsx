"use client";

import { useState } from "react";
import { DropdownProps, SelectionMode } from "./config";
import './index.css'
import { setToString } from "@/utils/setToString";

export default function Dropdown(props: DropdownProps) {
    const { title, options, selectionMode, defaultText, onSelectionChange } = props
    const [ isCollapsed, setIsCollapsed ] = useState(true)
    const [ selectedItems, _setSelectedItems ] = useState(new Set<string>())
    const [ selectionResultString, setSelectionResultString ] = useState(defaultText ?? '')

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

    return (
        <div className="dropdown-container">
            <p>{title}</p>
            <div className="relative w-full h-fit">
                <div
                    className="dropdown-element"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <div className="w-full h-full">
                        { selectionResultString }
                    </div>
                    <div className="px-[1rem]">
                        {isCollapsed ? 'V' : '^'}
                    </div>
                </div>
                <div hidden={isCollapsed} className="dropdown-menu-container">
                    <div className="flex flex-col items-start">
                        {
                            options.map((option, index) => {
                                return (
                                    <div
                                        className="dropdown-menu-item"
                                        key={`${option}_${index}`}
                                        onClick={() => handleItemClick(option)}
                                    >
                                        {selectionMode === SelectionMode.MultiSelect && (<input type='checkbox'></input>)}
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