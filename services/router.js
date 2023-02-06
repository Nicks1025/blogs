import home from '../components/home.vue'
import register from "../components/register.vue"
import login from "../components/login.vue"
import createBlog from "../components/createBlog.vue"
import blogPage from "../components/blogPage.vue"
import blog from "../components/blog.vue"
import account from "../components/account.vue"

export default[
    {
        path : "/",
        component : home 
    },
    {
        path : "/register",
        component : register
    },
    {
        path : "/login",
        component : login
    },
    {
        path : "/blogPage",
        component : blogPage
    },
    {
        path : "/blog",
        component : blog
    },
    {
        path : "/createBlog",
        component : createBlog
    },
    {
        path : "/account",
        component : account
    },
]