import { createBrowserRouter } from "react-router";
import User from "@/pages/User";
import App from "@/App";
import Task from "@/pages/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: Task,
      },
      {
        path: "tasks",
        Component: Task,
      },
      {
        path: "users",
        Component: User,
      },
    ],
  },
]);

export default router;
