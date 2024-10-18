import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/main";
import Layout from "../layout/layout";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/FWT/",
      element: <MainPage />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default AppRouter;
