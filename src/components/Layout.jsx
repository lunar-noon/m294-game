import { Outlet } from 'react-router-dom'
import GlobalNavigation from './GlobalNavigation'

export default function Layout() {
  return(
    <div className='App'>
      <GlobalNavigation />
      <div className='content'>
        <br />
        <h1>Welcome to the Wiss-Quiz</h1>
        <hr />
        <Outlet />
      </div>
    </div>
  )
}