import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <div className="">
            <div className="font-bold text-center text-2xl">Links</div>
            <div className="">
                <h2 className="font-bold text-center text-2xl">Public</h2>

                <Link className="bg-amber-500 hover:bg-blue-700 text-white font-bold px-2 py-4 mx-2 my-2 mt-5 rounded focus:outline-none focus:shadow-outline" to="/homepage">Home</Link>

                <Link className="bg-amber-500 hover:bg-blue-700 text-white font-bold px-2 py-4 mx-2 my-2 mt-5 rounded focus:outline-none focus:shadow-outline" to="/login">Login</Link>

                <Link className="bg-amber-500 hover:bg-blue-700 text-white font-bold px-2 py-4 mx-2 my-2 mt-5 rounded focus:outline-none focus:shadow-outline" to="/registration">Register</Link>
            </div>

            <div className="place-content-center">
                <div className="">
                    <h1 className="font-bold text-center text-2xl">Private</h1>

                    <Link className="bg-amber-500 hover:bg-blue-700 text-white font-bold px-2 py-4 mx-2 my-2 mt-5 rounded focus:outline-none focus:shadow-outline" to="/homepageuser">User Home</Link>

                    <Link className="bg-amber-500 hover:bg-blue-700 text-white font-bold px-2 py-4 mx-2 my-2 mt-5 rounded focus:outline-none focus:shadow-outline" to="/admin">Admin Page</Link>

                    <Link className="bg-amber-500 hover:bg-blue-700 px-2 py-4 mx-2 my-2 mt-5 items-center text-white font-bold  rounded focus:outline-none focus:shadow-outline" to="/management">Management Team's Page</Link>
                </div>
            </div>

        </div>
    )
}

export default LinkPage