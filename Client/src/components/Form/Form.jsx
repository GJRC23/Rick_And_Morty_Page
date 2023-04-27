import './Form.css'
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1 className="titleForm">Porfavor ingrese los datos correspondientes</h1>

            <label className="emailAndPassBox" htmlFor="email">Email: </label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <label className="emailAndPassBox" htmlFor="password">Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}

            <button className="submitBtn">Submit</button>
        </form>
    )
}

export default Form;