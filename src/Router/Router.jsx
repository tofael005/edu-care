import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Log/Login";
import Register from "../Log/Register";
import Error from "../Pages/Home/Error";
import Dashboard from "../Layout/Dashboard";
import Private from "../Private/Private";
import AddCourse from "../Dashboard/Instructors/shared/AddCourse";
import MyCourse from "../Dashboard/Instructors/shared/MyCourse";
import ManageClasess from "../Dashboard/Admin/shared/ManageClasess";
import ManageUser from "../Dashboard/Admin/shared/ManageUser";
import MyEnrollCoures from "../Dashboard/Students/shared/MyEnrollCoures";
import MySelectCourse from "../Dashboard/Students/shared/MySelectCourse";
import Payment from "../Dashboard/Students/shared/Payment";
import PaymentHist from "../Dashboard/Students/shared/PaymentHist";
import Edite from "../Dashboard/Instructors/component/Edite";
import Instructor from "../Pages/Teacher/Instructor";
import Classes from "../Pages/Course/Classes";
import AdminOnly from "../Private/AdminOnly";
import InstructorOnly from "../Private/InstructorOnly";


const router = createBrowserRouter([
    {
       path: "/",
       element: <Root />,
       errorElement: <Error />,
       children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/classes",
            element: <Classes />
        },
        {
            path: "/instructor",
            element: <Instructor />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
       ]
    },
    {
        path: "/dashboard",
        element: <Private><Dashboard /></Private>,
        errorElement: <Error />,
        children: [
            
            {
                path: "/dashboard/addCourse",
                element: <InstructorOnly><AddCourse /></InstructorOnly>
            },
            {
                path: "/dashboard/myCourse",
                element: <InstructorOnly><MyCourse /></InstructorOnly>
            },
            {
                path: "/dashboard/:id/edit",
                element: <Edite />
            },
            {
                path: "/dashboard/manageClasses",
                element: <AdminOnly><ManageClasess /></AdminOnly>
            },
            {
                path: "/dashboard/manageUser",
                element: <AdminOnly><ManageUser /></AdminOnly>
            },
            {
              path: "/dashboard/myEnrollCourse",
              element: <MyEnrollCoures />  
            },
            {
              path: "/dashboard/mySelectCourse",
              element: <MySelectCourse />  
            },
            {
              path: "/dashboard/payment",
              element: <Payment />  
            },
            {
              path: "/dashboard/paymentHist",
              element: <PaymentHist />  
            }
        ]
    }
])

export default router;