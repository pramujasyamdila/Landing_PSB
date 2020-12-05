import React from 'react';
import '../../../components/molecules/formDaftar/FormDaftar.css';

const FormSukses = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Kami sudah menerima pedaftaran anda!</h1>
      <img className='form-img-2' src='images/proses.svg' alt='success' />
    </div>
  );
};

export default FormSukses;