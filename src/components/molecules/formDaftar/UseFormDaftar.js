import { useState, UseEffect } from 'react'


const UseformDaftar = validasi => {
    const [values, setValues] = useState({
        email: '',
        password: '',
       
    });
    const [error, setError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const HandleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value // ambil value dari form 
        });
    };

    const HandleSubmit = e => {
        e.preventDefault();
        setError(validasi(values));
        setIsSubmit(true);
    }
    return { HandleChange, HandleSubmit, values, error, isSubmit };
}
export default UseformDaftar