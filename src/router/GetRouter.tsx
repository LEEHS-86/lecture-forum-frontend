import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import SignUpPage from "../pages/auth/signup/SignUpPage.tsx";
import HomePage from "./HomePage.tsx";
import SignInPage from "../pages/auth/signin/SignInPage.ts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "auth",
                children: [
                    { path: "signIn", element: <SignInPage /> },
                    { path: "signup", element: <SignUpPage /> },
                ],
            },
        ],
    },
]);

export default router;
