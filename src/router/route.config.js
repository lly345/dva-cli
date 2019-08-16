import Home from "../containers/Home";
import Homepage from "../containers/Homepage";
import Mine from "../containers/Mine";
import Shop from "../containers/Shop";

const routes = [
    {
        path: "/home",
        component: Home,
        children: [
            {
                path: "/home/homepage",
                component: Homepage
            },
            {
                path: "/home/mine",
                component: Mine
            },
            {
                path: "/home/shop",
                component: Shop
            }
        ]
    },
    {
        from: "/",
        to: "/home"
    }
];

export default routes;
