export function Login() {
    return (
        <>
            <div className="login">
                <div className="login__container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>Email</h5>
                        <input type="email" />
                        <h5>Password</h5>
                        <input type="password" />
                        <button>Sign In</button>
                    </form>
                    <p>
                        By signing-in you agree to the NETFLIX CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button>Create your Netflix Account</button>
                </div>
            </div>
        </>
    )
}