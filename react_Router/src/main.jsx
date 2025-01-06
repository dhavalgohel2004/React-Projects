import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contect from './components/Contact/Contect.jsx'
import User from './components/User/User.jsx'
import Github, { gitHuInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:  '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contect',
//         element: <Contect />
//       },
//     ] 
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> 
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contect" element={<Contect />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" loader={gitHuInfoLoader} element={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
