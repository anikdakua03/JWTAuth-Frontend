import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1 className="text-center text-8xl text-red-700 font-bold">Unauthorized</h1>
            <br />
            <p className="text-center text-4xl text-yellow-300 font-bold">You do not have access to the requested page.</p>
            <div className="text-center text-2xl text-purple-700 font-bold">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
    )
}

export default Unauthorized