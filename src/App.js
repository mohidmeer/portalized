import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/auth/Login";
import Landing from "./pages/Landing";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AboutUs from "./pages/AboutUs";
import MobileApp from "./pages/MobileApp";
import Shop from "./pages/Shop";
import Listen from "./pages/Listen";
import Watch from "./pages/Watch";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import PodcastDetail from "./pages/PodcastDetail";
import ChannelDetail from "./pages/ChannelDetail";
import PlaylistDetail from "./pages/PlaylistDetail";
import Profile from "./pages/user/Profile";
import Followings from "./pages/user/Followings";
import Orders from "./pages/user/Orders";
import SavedMerchandise from "./pages/user/SavedMerchandise";
import SavedPodcasts from "./pages/user/SavedPodcasts";

const routes = [
  {
    layout: PublicLayout,
    routes: [
      { path: '', element: <Landing /> },
      { path: '/about-us', element: <AboutUs/> },
      { path: '/mobile-app', element: <MobileApp/> },
      { path: '/shop', element: <Shop/> },
      { path: '/listen', element: <Listen/> },
      { path: '/watch', element: <Watch/> },
      { path: '/mobile', element: <MobileApp/>},
      { path: '/contact-us', element: <ContactUs/>},
      { path: '/product/:slug', element: <ProductDetail/>},
      { path: '/checkout', element: <Checkout/>},
      { path: '/podcast/:slug', element: <PodcastDetail/>},
      { path: '/podcast/playlist/:slug', element: <PlaylistDetail/>},
      { path: '/channel/:slug', element: <ChannelDetail/>},
      { path: '/user/profile', element: <Profile/>},
      { path: '/user/following', element: <Followings/>},
      { path: '/user/orders', element: <Orders/>},
      { path: '/user/saved-merchandise', element: <SavedMerchandise/>},
      { path: '/user/saved-podcasts', element: <SavedPodcasts/>},
    ]
  },
  {   
    layout: AuthLayout,
    routes: [
      { path: '/login', element: <Login /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '/reset-link', element: <ResetPassword /> },
    ]
  },
]

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((routeGroup, index) => (
          <Route key={index} element={<routeGroup.layout />}>
            {routeGroup.routes.map((route, subIndex) => (
              <Route key={subIndex} path={route.path} element={route.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
