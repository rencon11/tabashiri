'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const tabs = [
  { href: '/home', label: '連絡' },
  { href: '/schedule', label: 'スケジュール' },
  { href: '/graph', label: '語句' },
]

export function getTabIndex(pathname: string): number {
  if (pathname === '/' || pathname === '/home') return 0
  const index = tabs.findIndex((tab) => tab.href === pathname)
  return index !== -1 ? index : 0
}

interface SectionTabsProps {
  currentPath?: string
  onTabChange?: (href: string, direction: 'forward' | 'backward') => void
}

export function SectionTabs({ currentPath, onTabChange }: SectionTabsProps) {
  const routerPathname = usePathname()
  const activePath = currentPath ?? routerPathname

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetHref: string,
    targetIndex: number
  ) => {
    const currentIndex = getTabIndex(activePath)
    if (
      currentIndex === targetIndex &&
      (activePath === targetHref || (activePath === '/' && targetHref === '/home'))
    ) {
      e.preventDefault()
      return
    }

    const direction: 'forward' | 'backward' =
      targetIndex >= currentIndex ? 'forward' : 'backward'

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('tab_slide_direction', direction)
      document.documentElement.dataset.slideDirection = direction
    }

    if (onTabChange) {
      e.preventDefault()
      onTabChange(targetHref, direction)
    }
  }

  return (
    <nav aria-label="セクション" className="w-fit ml-auto">
      <ul className="section-tabs flex gap-2">
        {tabs.map((tab, index) => {
          const selected =
            activePath === tab.href ||
            (tab.href === '/home' && activePath === '/')

          return (
            <li key={tab.href} className="inline flex-1">
              <Link
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab.href, index)}
                aria-current={selected ? 'page' : undefined}
                className={`w-30 text-center block p-2 rounded-xl transition-all duration-200 ${
                  selected
                    ? 'bg-amber-400 font-bold shadow-sm scale-105'
                    : 'bg-amber-100 hover:bg-amber-200'
                }`}
              >
                {tab.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}