import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='w-full sm:w-72 flex flex-col border-b sm:border-b-0 sm:border-r border-slate-500 p-4'>
      <SearchInput />
      <div className='divider px-3'> </div>
      <Conversations />
      <Logout />
    </div>
  )
}

export default Sidebar
