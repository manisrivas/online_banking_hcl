import './App.scss'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Body from './components/dashboard/Body section/Body'
import Transactions from './components/dashboard/transactions/transactions'
import Wallet from './components/dashboard/wallet/wallet'


import{
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'
import Goals from './components/dashboard/goals/goals'

const router = createBrowserRouter([
  {
    path:'/',
    element: <div><Login/></div>
  },
  {
    path:'register',
    element: <div><Register/></div>
  },
  {
    path:'dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path:'Home',
    element: <div><Body/></div>
  },
  {
    path:'wallet',
    element: <div><Wallet/></div>
  },
  {
    path:'transactions',
    element: <div><Transactions/></div>
  },
  {
    path:'goals',
    element: <div><Goals/></div>
  }
  
])



function App() {
  return(
    <div>
    <RouterProvider router = {router} />
    </div>
  )

 
    
}

export default App
