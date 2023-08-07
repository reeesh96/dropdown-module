"use client"

import { ApiTable } from "@/components/apiTable"
import Dropdown from "@/components/dropdown"
import { DropdownProps, SelectionMode } from "@/components/dropdown/config"
import { useState } from "react"

export default function Home() {
  const [result1, setResult1] = useState('')
  const [result2, setResult2] = useState('')

  const dropdownProps: DropdownProps = {
    title: 'Single Select',
    options: ['Tony Stark', 'Steve Rogers', 'Bruce Banner', 'Natasha Romanoff', 'Thor', 'Peter Parker', 'T\'Challa', 'Dr. Strange'],
    selectionMode: SelectionMode.SingleSelect,
    onSelectionChange(selectedItems: string[]) {
      setResult1(selectedItems.join(','))
    },
  }
  
  const multiSelectDropdownProps = {
    ...dropdownProps,
    title: 'Multi Select',
    selectionMode: SelectionMode.MultiSelect,
    defaultText: 'Make a selection',
    required: true,
    onSelectionChange(selectedItems: string[]) {
      setResult2(selectedItems.join(','))
    }
  }
  
  return (
    <main className="flex min-h-screen flex-col items-start gap-[4rem] p-24">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">Single-Select Dropdown</h2>
        <Dropdown {...dropdownProps} />
        <div>You Selected: { result1 }</div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">Multi-Select Dropdown</h2>
        <Dropdown {...multiSelectDropdownProps} />
        <div>You Selected: { result2 }</div>
      </div>
      <br></br>
      <div>
        <h2 className="text-3xl">API / Component Props</h2>
        <ApiTable />
      </div>
    </main>
  )
}
