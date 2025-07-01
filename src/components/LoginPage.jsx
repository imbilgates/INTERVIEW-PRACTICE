import React from 'react'

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);

    const [user, setUser] = React.useState('');
    const [error, setError] = React.useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Please fill in both fields.');
            return;
        }

        // alert(`Email: ${email}, Password: ${password}`);
        setUser(email);
        setShowAlert(true);
        setEmail('');
        setPassword('');
        setTimeout(() => { setShowAlert(false); }, 3000);
    };

    return (
        <div className="container">

            {showAlert && <div className="d-flex mt-1">
                <div className="alert col alert-success align-items-center d-flex justify-content-between">
                    <span>Welcome `{user}` to our page!.</span>
                    <button onClick={() => setShowAlert(false)} className='btn-close'></button>
                </div>
            </div>}

            {error !== '' && <div className="d-flex mt-1">
                <div className="alert col alert-danger align-items-center d-flex justify-content-between">
                    <span>{error}</span>
                    <button onClick={() => setError('')} className='btn-close'></button>
                </div>
            </div>}

            <div className="d-flex align-items-center justify-content-center min-vh-100">
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <div className="border p-4 rounded shadow-sm bg-light">
                        <h2 className="text-center mb-4">Login Page</h2>
                        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="btn btn-primary w-100" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage