'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    const direction = sessionStorage.getItem('tab_slide_direction')
    if (direction === 'forward') {
      setAnimationClass('slide-in-right')
    } else if (direction === 'backward') {
      setAnimationClass('slide-in-left')
    }
    // 使用後にセッションストレージからクリア
    sessionStorage.removeItem('tab_slide_direction')
  }, [pathname])

  return (
    <div key={pathname} className={`tab-content-container page-transition-view ${animationClass}`}>
      {children}
    </div>
  )
}
