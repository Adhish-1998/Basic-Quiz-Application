import './Admin.css'

const Admin = () => {
    return (
        <div id="admin">
            <div class="Container">
                <h3>Admin Login</h3>
                <div class='input'>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput" class="floatingIn">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingInput" class="floatingIn">Password</label>
                    </div>
                    <button type="Login" class="btn btn-primary" id="Submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Admin