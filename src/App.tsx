import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/:movieParam' element={<SingleMovie/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
