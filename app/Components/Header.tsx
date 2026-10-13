import { SectionTabs } from '@/app/Components/SectionTabs'

export default function Header() {
  return (
    <header className="bg-amber-200 font-zen font-black p-2 pl-5 w-full flex items-center shadow-xs">
      <p className="text-2xl w-fit inline-block">たばしり</p>
      <SectionTabs />
    </header>
  )
}
