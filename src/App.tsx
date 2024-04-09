import './App.css'
// import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
// import { PeliculaIndividual } from './components/peliculas/PeliculaIndividual'
import { Navbar } from './components/navigation/Navbar'
function App() {
  return (
    <>
      <div className='flex w-full h-full'>
      <Navbar/>
      <Outlet/>
      </div>
    </>
  )
}
// interface AppLayoutProps{
//   children:ReactNode
// }
export default App
