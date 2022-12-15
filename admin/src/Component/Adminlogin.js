import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AdminLoginContext } from '../AdminLoginContext'


function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const { setadminLoginName, setadminLoginStatus } = useContext(AdminLoginContext)
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault(e)
        console.log(username, password);
        const bodydata = { username, password };
        fetch('/api/adminlogin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodydata)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                if (data.username) {
                    navigate('/admindashboard')
                    setMessage("Loggedin Properly!")
                    localStorage.setItem('adminLoginName', data.username)
                    setadminLoginName(localStorage.getItem('adminLoginName'))
                    localStorage.setItem('adminLoginStatus', '1')
                    setadminLoginStatus(localStorage.getItem('adminLoginStatus'))
                } else {
                    setMessage('Wrong Credentials!')
                }
            })
    }
    return (
        <>

            <section id="login">
                <div className="container bg-light mt-3">
                    <div className="row ">
                        <div className="col-md-4 ps-5">
                            <div className="text-center text-primary"><h2>Login Here!</h2></div>
                            <span className='text-danger'>{message}</span>
                            <form method='post' onSubmit={(e) => { handleSubmit(e) }}>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text"
                                        value={username}
                                        onChange={(e) => { setUsername(e.target.value) }}
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary form-control">Login</button>
                                <div className="mt-3">
                                    <Link to="/reg">Create a new account here!</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8"><img className="img-fluid" src='/images/login.webp' style={{ width: '600px', height: '450px', marginLeft: '50px' }} alt='logo' /></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminLogin;