import { Link } from "react-router-dom"

const Lounge = () => {
    return (
        <section>
            <h1 className="text-center text-6xl text-purple-700 font-bold">The Lounge</h1>
            <br />
            <p className="text-center text-4xl text-pink-700 font-bold">Admins and Management team can hang out here.</p>
            <div className="text-center px-6 mt-4 text-2xl text-blue-700 font-bold border-solid">
                <Link to="/homepageuser">Home</Link>
            </div>
        </section>
    )
}

export default Lounge