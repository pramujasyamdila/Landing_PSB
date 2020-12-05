
// import React from 'react'
// // import { FormDaftarLanding} from '../../../organisms'

// const Daftar = () => {
//     return (
//         <>
//             {/* <NavbarLanding/> */}
//           <FormDaftarLanding/>
//        </>
//     )
// }

// export default Daftar


import React, { useState } from 'react';
import '../../../../components/molecules/formDaftar/FormDaftar.css';
import FormDaftar from '../../../../components/molecules/formDaftar/FormDaftar';
import FormSukses from '../../../../components/molecules/formDaftar/FormSukses';


const DaftarLanding = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  function submitForm() {
    setIsSubmit(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/edu.svg' alt='edu' />
        </div>
        {!isSubmit ? (
          <FormDaftar submitForm={submitForm} />
        ) : (
          <FormSukses/>
        )}
      </div>
    </>
  );
};

export default DaftarLanding;