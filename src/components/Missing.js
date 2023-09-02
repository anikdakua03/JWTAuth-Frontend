import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article className="dark:bg-slate-800" style={{ padding: "100px" }}>
            <h1 className="text-center text-6xl text-pink-700 font-bold">Oops !</h1>
            <p className="text-center mt-4 text-4xl text-purple-700 font-semibold">Page Not Found</p>
            <div className="text-center mt-6 text-2xl text-yellow-700 font-bold">
                <Link to="/homepage">Visit Our Homepage</Link>
            </div>
        </article>
    )
}

export default Missing