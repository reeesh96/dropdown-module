"use client";

import { useState } from "react";
import { DropdownProps } from "./config";

export default function Dropdown(props: DropdownProps) {
    const { title, options } = props
    const [ isCollapsed, setIsCollapsed ] = useState(true)

    return (
        <div className="flex flex-col items-start text-base w-[19rem]">
            <p>{title}</p>
            <div className="relative w-full flex flex-row" onClick={() => setIsCollapsed(!isCollapsed)}>
                <div className="w-full h-[2rem] border-solid border-2 border-indigo-600">
                </div>
                <div className="px-[1rem]">
                    {isCollapsed ? 'V' : '^'}
                </div>
                <div className="absolute mt-[2rem] h-fit w-full">
                    {
                        options.map((option, index) => {
                            return (
                                <div key={`${option}_${index}`}>{option}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}