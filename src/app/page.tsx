import Dropdown from "@/components/dropdown"
import { DropdownProps, SelectionMode } from "@/components/dropdown/config"

export default function Home() {
  const dropdownProps: DropdownProps = {
    title: 'Demo',
    options: ['Op1', 'Op2'],
    selectionMode: SelectionMode.MultiSelect
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dropdown {...dropdownProps} />
    </main>
  )
}
