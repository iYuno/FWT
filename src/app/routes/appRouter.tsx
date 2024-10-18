import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Gallery } from "@/widgets/gallery";
import Layout from "../layout/layout";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/FWT/",
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
