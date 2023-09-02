import Registration from './components/Registration';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import Missing from './components/Missing';
import Lounge from './components/Lounge';
import Admin from './components/Admin';
import Management from './components/Management';
import LinkPage from './components/LinkPage';
import HomePageUser from './components/HomePageUser';
import ResetPassword from './components/ResetPassword';

const ROLES = {
  0: 'User',
  1: 'Admin',
  2: 'Management'
}

function App() {

  return (
    <Routes>
      <Route path="/" basename="homepage" element={<Layout/>}>
        {/* public routes */}
        <Route path="homepage" exact element={<HomePage />} />
        <Route path="login"  element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES[0]]} />}>
          <Route path="homepageuser" element={<HomePageUser />} />
        </Route>

        {/* <Route element={<RequireAuth  />}> */}
          <Route path="reset-password" element={<ResetPassword />} />
        {/* </Route> */}

        {/* <Route element={<RequireAuth allowedRoles={[ROLES[1]]} />}> */}
          <Route path="admin" element={<Admin />} />
        {/* </Route> */}

        <Route element={<RequireAuth allowedRoles={[ROLES[2]]} />}>
          <Route path="management" element={<Management />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES[1], ROLES[2]]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* matching nothin catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>

    // <div>
    //   <Navbar/>
    //   <BrowserRouter>
    //       <Routes>
    //         <Route path="/" exact element={<HomePage/>}></Route>
    //         <Route path="/login" exact element={<Login/>}></Route>
    //         <Route path="/registration" exact element={<Registration/>}></Route>
    //         <Route path="/reset-password" exact element={<ResetPassword/>}></Route>
    //       </Routes>
    //   </BrowserRouter>

    // </div>
  );
}

export default App;
