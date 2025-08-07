import React, { lazy, Suspense } from "react"
import { useRoutes } from "react-router-dom"


const Support = lazy(()=> import("./support//Support"))
const Contact = lazy(()=> import("./contact/Contact"))
const Product = lazy(()=> import("./product/Product"))
const About = lazy(()=> import("./aboud/About"))
const Login = lazy(()=> import("./login/Login"))
const Home = lazy(()=> import("./home/Home"))
const Layuot = lazy(()=> import("./layout/Layuot"))


const Dashbord = lazy(()=> import("./dashbord/Dashbort"))

const Users = lazy(()=> import("./dashbord/users/Users"))
const UserActivation = lazy(()=> import("./dashbord/users/activeUsers/ActiveUsers"))
const Lorem = lazy(()=> import("./dashbord/users/lorem/Lorem"))
const AAA = lazy(()=> import("./dashbord/users/AAA/AAA"))
const BBB = lazy(()=> import("./dashbord/users/BBB/BBB"))
const Ccc = lazy(()=> import("./dashbord/users/CCC/Ccc"))

const Products = lazy(()=> import("./dashbord/product/Product"))
const Category = lazy(()=> import("./dashbord/category/Category"))
const Order = lazy(()=> import("./dashbord/order/Order"))
const Reports = lazy(()=> import("./dashbord/reports/Reports"))
const Settings = lazy(()=> import("./dashbord/settings/Settings"))

const MainRoutes = () => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            {useRoutes([
                {
                    path: "/", element: <Layuot/>,
                    children:[
                        {index: true, element: <Home/>},
                        {path: "home", element: <Home/>},
                        {path: "about", element: <About/>},
                        {path: "product", element: <Product/>},
                        {path: "contact", element: <Contact/>},
                        {path: "support", element: <Support/>},
                        {path: "*", element: <div>404</div>}
                    ]
                    
                },
                {path: "login", element: <Login/>},
                {path: "Dashbord", element: <Dashbord/>,
                    children:[
                        {path: "dashboard/users", element: <Users/>,children:[
                            {index: true, element: <UserActivation/>},
                            {path: "activeUsers-2", element: <Lorem/>},
                            {path: "activeUsers-3", element: <AAA/>},
                            {path: "activeUsers-4", element: <BBB/>},
                            {path: "activeUsers-5", element: <Ccc/>}
                        ]},
                        {path: "dashboard/products", element: <Products/>},
                        {path: "dashboard/categories", element: <Category/>},
                        {path: "dashboard/orders", element: <Order/>},
                        {path: "dashboard/reports", element: <Reports/>},
                        {path: "dashboard/settings", element: <Settings/>},
                        

                    ]
                },
            ])}
        </Suspense>

    )
}

export default React.memo(MainRoutes)