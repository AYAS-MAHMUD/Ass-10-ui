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
import ServicesDetails from "../Component/ServicesDetails";
import ErrorPage from "../Pages/ErrorPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                hydrateFallbackElement :<Loading/>,
                element: <Home />
                
            },
            {
                path: 'login',
                hydrateFallbackElement :<Loading/>,
                element: <Login />
                
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: 'services',
                hydrateFallbackElement :<Loading/>,
                element: <Services/>
                
            },
            {
                path: 'myservices',
                hydrateFallbackElement :<Loading/>,
                element: <PrivetRoute>
                    <MyServices/>
                </PrivetRoute>
                
            },
            {
                path: 'addservices',
                hydrateFallbackElement :<Loading/>,
                element: <PrivetRoute>
                    <AddServices/>
                </PrivetRoute>
                
            },
            {
                path: 'mybooking',
                hydrateFallbackElement :<Loading/>,
                element: <PrivetRoute>
                    <MyBooking/>
                </PrivetRoute>
                
            },
            {
                path: 'profile',
                hydrateFallbackElement :<Loading/>,
                element: <PrivetRoute>
                    <Profile/>
                </PrivetRoute>
                
            },
            {
                path : 'servicesDetails/:id',
                hydrateFallbackElement : <Loading></Loading>,
                element : <PrivetRoute>
                    <ServicesDetails></ServicesDetails>
                </PrivetRoute>,
                loader : ({params})=>fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path : '*',
                element : <ErrorPage></ErrorPage>
            }
 
        ],
    },
])