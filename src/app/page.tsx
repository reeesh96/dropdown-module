"use client"

import Dropdown from "@/components/dropdown"
import { DropdownProps, SelectionMode } from "@/components/dropdown/config"

export default function Home() {
  const dropdownProps: DropdownProps = {
    title: 'Single Select',
    options: ['Tony Stark', 'Steve Rogers', 'Bruce Banner', 'Natasha Romanoff', 'Thor'],
    selectionMode: SelectionMode.SingleSelect,
    onSelectionChange(selectedItems) {
      console.log('Items Changed!')
      console.log(selectedItems)
    },
  }
  
  const multiSelectDropdownProps = {
    ...dropdownProps,
    title: 'Multi Select',
    selectionMode: SelectionMode.MultiSelect,
    defaultText: 'Make a selection',
    required: true
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <Dropdown {...dropdownProps} />
      <Dropdown {...multiSelectDropdownProps} />
    </main>
  )
}
