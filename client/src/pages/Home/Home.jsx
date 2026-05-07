import { useState, useEffect, useCallback } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  const openSidebar  = useCallback(() => setSidebarOpen(true),  [])

  // ESC key closes sidebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeSidebar()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeSidebar])

  // Prevent body scroll while sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <div className='relative flex flex-col sm:flex-row w-full max-w-5xl h-[90svh] sm:h-[28rem] md:h-[34rem] my-2 rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden'>

      {/* Mobile backdrop overlay */}
      <div
        aria-hidden='true'
        onClick={closeSidebar}
        className={[
          'absolute inset-0 z-30 sm:hidden',
          'bg-black/50 backdrop-blur-sm',
          'transition-opacity duration-300',
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      />

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <Main onOpenSidebar={openSidebar} />
    </div>
  )
}

export default Home
