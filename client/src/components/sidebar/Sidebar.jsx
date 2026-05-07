import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'
import { IoClose } from 'react-icons/io5'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/*
        Mobile: fixed, full-height, slides in from left (z-40 above z-30 overlay).
        Desktop (sm+): static, inside the flex layout — no translate classes active.
      */}
      <div
        role='dialog'
        aria-modal='true'
        aria-label='Conversations sidebar'
        className={[
          /* ── Mobile positioning ── */
          'fixed top-0 left-0 h-full w-72 z-40',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          /* ── Desktop override: back to static flow ── */
          'sm:static sm:translate-x-0 sm:h-auto sm:z-auto sm:transition-none',
          /* ── Shared styles ── */
          'flex flex-col border-b sm:border-b-0 sm:border-r border-slate-500 p-4',
          'bg-gray-800/95 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none',
          'overflow-y-auto',
        ].join(' ')}
      >
        {/* Close button — mobile only */}
        <button
          onClick={onClose}
          aria-label='Close sidebar'
          className='sm:hidden self-end mb-2 p-1 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400'
        >
          <IoClose className='w-6 h-6' />
        </button>

        <SearchInput />
        <div className='divider px-3'> </div>
        <Conversations onSelectConversation={onClose} />
        <Logout />
      </div>
    </>
  )
}

export default Sidebar
