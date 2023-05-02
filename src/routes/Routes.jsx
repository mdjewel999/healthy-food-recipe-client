import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import RecipeLayout from "../layout/RecipeLayout";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
// import LoginLayout from "../layout/LoginLayout";
// import Login from "../Login/Login/Login";
// import Register from "../Login/Register/Register";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginLayout></LoginLayout>,
  //   children: [
  //     {
  //     path:'login',
  //     element:<Login></Login>,
  //   },
  //   {
  //     path:'register',
  //     element:<Register></Register>
  //   },
   
  // ],
  // },

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () => fetch('http://localhost:5000/recipe')
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      
    ],
  },
  {
    path: "recipe",
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: ":id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
      },
    ],
  },
]);

export default router;
