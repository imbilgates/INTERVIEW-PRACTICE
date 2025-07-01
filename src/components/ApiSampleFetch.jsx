import { useEffect, useState } from 'react'

const ApiSampleFetch = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const random = Math.floor(Math.random() * 100) + 1;

    const fetchData = async () => {
        try {
            const res = await fetch(`https://official-joke-api.appspot.com/jokes/random`)
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await res.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleButton = () => {
        fetchData();
    }

    if (loading) {
        return <>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <span className="ms-3">Loading data...</span>
        </div>
        </>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">API Sample Fetch</h1>

            {error && (
                <div className="alert alert-danger text-center" role="alert">
                    Error: {error.message}
                </div>
            )}

            {data && (
                <div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
                    <div className="card-body">
                        <h5 className="card-title text-primary">Joke Type: {data.type}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Here's a joke for you:</h6>
                        <p className="card-text">
                            <strong>{data.setup}</strong><br />
                            <em>{data.punchline}</em>
                        </p>
                    </div>
                </div>
            )}


            <div className="d-flex justify-content-center mt-4">
                <button
                    onClick={handleButton}
                    className='btn btn-info'>click me for random joke
                </button>
            </div>
        </div>
    );

}

export default ApiSampleFetch