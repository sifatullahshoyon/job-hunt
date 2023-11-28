import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Statistics from './components/Statistics.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';
import Blog from './components/Blog.jsx';
import JobDetails from './components/FeaturedJobs/JobDetails.jsx';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/data/jobs.json'),
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'featureJobs',
        element: <FeaturedJobs />,
      },
      {
        path: '/featureJobs/:id',
        element: <JobDetails />,
      },
      {
        path: 'blog',
        element: <Blog />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)
