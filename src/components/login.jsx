

const LoginForm = () => {
    function handleSubmit(event) {
        console.log('submited')
        event.preventDefault(); 
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Login
                <input type="text"/>
            </label>
            <label>
                Password
                <input type="password"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

const Login = () => {
    return (
    <div>
        <p>Login page</p>
        <LoginForm/>
    </div>
    )
}
export default Login;