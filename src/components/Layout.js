import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <main className="App">
            <Navbar/>
            <Outlet className="dark:bg-slate-800" />
        </main>
    )
}

export default Layout