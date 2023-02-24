import Admin from "./Admin"
import Login from "./Login"
import { ADMIN_ROUTE, LOGIN_ROUTE } from "./utils/consts"

export const publicRoutes=[
{
    path: LOGIN_ROUTE,
    element: Login
}
]
export const privateRoutes=[
    {
        path: ADMIN_ROUTE,
        element: Admin
    }
]