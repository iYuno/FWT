import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Gallery from '../../pages/main/ui/page';
import Layout from '../layout/layout';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Gallery />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default AppRouter;
