import User from "./User"
import Login from "./Login";
import { USER_ROUTE, LOGIN_ROUTE } from "./consts"

export const publicRoutes=[
{
    path: LOGIN_ROUTE,
    element: Login
}
]
export const privateRoutes=[
    {
        path: USER_ROUTE,
        element: User
    }
]