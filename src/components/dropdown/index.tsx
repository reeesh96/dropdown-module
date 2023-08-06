"use client";

import { useState } from "react";
import { DropdownProps } from "./config";
import './index.css'

export default function Dropdown(props: DropdownProps) {
    const { title, options } = props
    const [ isCollapsed, setIsCollapsed ] = useState(true)

    function handleItemClick(item: string) {
        console.log(`You selected: ${item}`)
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
                                        {option}
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