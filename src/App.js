import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/PublicRoutes/Routes';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-emerald-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
