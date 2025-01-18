import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/auth/Login";
import Landing from "./pages/Landing";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";



const routes = [
  {
    layout: PublicLayout,
    routes: [
      { path: '', element: <Landing /> }
    ]
  },
  {
    layout: AuthLayout,
    routes: [   
      { path: '/login', element: <Login /> },
      { path: '/sign-up', element: <SignUp   /> },
      { path: '/forgot-password', element: <ForgotPassword/> },
      { path: '/reset-link', element: <ResetPassword/> },
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
