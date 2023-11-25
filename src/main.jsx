import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Statistics from './components/Statistics.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../../../public/data/jobs.json'),
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'appliedJobs/:id',
        element: <AppliedJobs />,
        loader: ({params}) => fetch(`../../../public/data/jobs.json/${params.id}`),
      },
      {
        path: '',
        element: <></>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
