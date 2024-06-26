import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserList from "./UserList";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "",
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        children: [
          {
            path: ":id",
            element: <UserDetail />,
          },
        ]
      },
      
    ],
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default router;
