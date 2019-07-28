import React, { useState } from 'react'

const Login = props => {
    const [fields, setFields] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const submit = e => {
        e.preventDefault()
        console.log(fields)
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <input type="text" name='username' onChange={(e) => handleChanges(e)} />
            <input type="text" name='password' onChange={handleChanges} />
            <button>Submit</button>
        </form>
    )
}

export default Login
