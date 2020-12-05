import React from 'react'
import useFormDaftar from './FormDaftar'
import './FormDaftar.css'
import validasi from '../../../constant/validasiDaftar'

const FormDaftar = ({submitForm}) => {
    const { HandleChange, HandleSubmit, values, error } = useFormDaftar(validasi, submitForm);

    return (
        <div className='form__container'>
            <form className='form__daftar' onSubmit={HandleSubmit}>
                <div className='form__inputs'>
                    <label
                        htmlFor='email'
                        className='form__daftar-label'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form__input'
                        placeholder='masukan email kamu'
                        values={values.email}
                        onChange={HandleChange}
                    />
                    {error.email && <p>{ error.email}</p>}
                </div>
                <div className='form__inputs'>
                    <label
                        htmlFor='password'
                        className='form__daftar-label'>
                        Password
                    </label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        className='form__input'
                        placeholder='masukan password kamu'
                        values={values.password}
                        onChange={HandleChange}
                    />
                   {error.password && <p>{ error.password}</p>}
                </div>
                <button type='submit'>Daftar</button>
            </form>  
        </div>
    )
}

export default FormDaftar
