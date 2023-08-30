import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <section>
            <h1 className="text-center text-6xl text-purple-700 font-bold">Admins Page</h1>
            <br />
            <p className="text-center text-4xl text-pink-700 font-bold">You must have been assigned an Admin role.</p>
            <div className="text-center px-6 mt-4 text-2xl text-blue-700 font-bold border-solid">
                <Link to="/homepageuser">Home</Link>
            </div>
        </section>
    )
}

export default Admin