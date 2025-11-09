import { createBrowserRouter } from "react-router";
import Home from '../Home/Home';
import RootLayout from '../Layout/RootLayout';
import Login from "../Pages/Login";
import Register from "../Pages/Registration";
import Services from "../Pages/Services";
import MyServices from "../Pages/MyServices";
import AddServices from "../Pages/AddServices";
import MyBooking from "../Pages/MyBooking";
import Profile from "../Pages/Profile";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../Component/Loading";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                hydrateFallbackElement :<Loading/>
            },
            {
                path: 'login',
                element: <Login />,
                hydrateFallbackElement :<Loading/>
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: 'services',
                element: <Services/>,
                hydrateFallbackElement :<Loading/>
            },
            {
                path: 'myservices',
                element: <PrivetRoute>
                    <MyServices/>
                </PrivetRoute>,
                hydrateFallbackElement :<Loading/>
            },
            {
                path: 'addservices',
                element: <PrivetRoute>
                    <AddServices/>
                </PrivetRoute>,
                hydrateFallbackElement :<Loading/>
            },
            {
                path: 'mybooking',
                element: <PrivetRoute>
                    <MyBooking/>
                </PrivetRoute>,
                hydrateFallbackElement :<Loading/>
            },
            {
                path: 'profile',
                element: <PrivetRoute>
                    <Profile/>
                </PrivetRoute>,
                hydrateFallbackElement :<Loading/>
            }
 
        ],
    },
])