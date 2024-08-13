"use client"
import React, {useState} from 'react'

export const Register = () => {

    const [data, setData] = useState({})

    const fnRegister = async () => {
        try {
            var dataObj = {
                "data": data
            }
            const res = await fetch('http://localhost:2020/std/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObj),
            })
            const result = await res.json()
            console.log(result);

        } catch (ex) {
            console.error(ex);
        }
    }

    const handleChange = (eve:any) => {
        const { name,value } = eve.target;
        setData({ ...data, [name]: value })
    }
    return (
        <div>
            <h3>Register</h3>
            <p>
                <b>Name:</b><input name="name" onChange={handleChange} />
            </p>
            <p>
                <b>Rno:</b><input name="rno" type='number' onChange={handleChange} />
            </p>
            <p>
                <b>Location:</b><textarea name="loc" onChange={handleChange} />
            </p>
            <p>
                <button onClick={fnRegister}>register</button>
            </p>
        </div>
    )
}
