import { createBrowserRouter, RouterProvider } from 'react-router';
import { Header, NavBar, Welcome } from './components';
import SignIn from './pages/(auth)/SignIn';


// Definir las rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <NavBar />
        <Welcome />
      </>
    ),
  },
  {
    path: '/signin',
    element: (
      <>
        <Header />
        <SignIn />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
