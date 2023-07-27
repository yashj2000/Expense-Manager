import React, {useState, useEffect} from 'react'
import {Form, Input, Spin, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitHandler = async (values) => {
        try {
            setLoading(true);
            const {data} = await axios.post('/users/login', values);
            message.success('Login Successful');
            localStorage.setItem('user', JSON.stringify({...data.user, password: ''}));
            setLoading(false);
            navigate('/');
        }
        catch(error) {
            setLoading(false);
            message.error('Invalid user details');
        }
    }

    //prevent user from going to register page if already logged in
    useEffect(() => {
        if(localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);


  return (
    <>
        <div className="register-page">
        {loading && <Spinner />}
            <Form layout='vertical' onFinish={submitHandler}>
            <h1>Login</h1>
                <Form.Item label = "Email" name="email">
                    <Input type='email'/>
                </Form.Item>
                <Form.Item label = "Password" name="password">
                    <Input type='password'/>
                </Form.Item>
                <div className="d-flex">
                    <Link to="/register">Not a user? Click here to register!</Link>
                    <button className="btn btn-primary">Login</button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Login