import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'


const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full max-w-5xl h-[85vh] sm:h-[28rem] md:h-[34rem] rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Home
