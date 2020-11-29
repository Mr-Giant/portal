import VueRouter from 'vue-router'

// All Pages
import HomeDemoOne from './components/pages/HomeDemoOne'
// import HomeDemoTwo from './components/pages/HomeDemoTwo'
// import HomeDemoThree from './components/pages/HomeDemoThree'
// import HomeDemoFour from './components/pages/HomeDemoFour'
import AboutUs from './components/pages/AboutUs'
import FeaturesOne from './components/pages/FeaturesOne'
import FeaturesTwo from './components/pages/FeaturesTwo'
// import Team from './components/pages/Team'
// import Pricing from './components/pages/Pricing'
// import Login from './components/pages/Login'
// import Register from './components/pages/Register'
import Error from './components/pages/Error'
// import Faq from './components/pages/Faq'
// import BlogOne from './components/pages/BlogOne'
// import BlogTwo from './components/pages/BlogTwo'
// import BlogThree from './components/pages/BlogThree'
import Contact from './components/pages/Contact'
// import PrivacyPolicy from './components/pages/PrivacyPolicy'
// import TermsCondition from './components/pages/TermsCondition'

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior(){
        return { x: 0, y: 0 }
    },

    routes: [
        {path: '/', component: HomeDemoOne},
        // {path: '/home-demo-two', component: HomeDemoTwo},
        // {path: '/home-demo-three', component: HomeDemoThree},
        // {path: '/home-demo-four', component: HomeDemoFour},
        {path: '/about-us', component: AboutUs},
        {path: '/features-1', component: FeaturesOne},
        {path: '/features-2', component: FeaturesTwo},
        // {path: '/team', component: Team},
        // {path: '/pricing', component: Pricing},
        // {path: '/login', component: Login},
        // {path: '/register', component: Register},
        {path: '/error', component: Error},
        // {path: '/faq', component: Faq},
        // {path: '/blog-1', component: BlogOne},
        // {path: '/blog-2', component: BlogTwo},
        // {path: '/blog-details', component: BlogThree},
        {path: '/contact', component: Contact},
        // {path: '/privacy-policy', component: PrivacyPolicy},
        // {path: '/terms-condition', component: TermsCondition},
    ]
})