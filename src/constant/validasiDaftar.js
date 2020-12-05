export default function validasiDaftar(values) {
    let errors = {}

    // untuk daftar kalau pakai username
    // if (!values.username.trim()) {
    //     errors.username = 'Username wajib di isi'
    // }

    if (!values.email) {
        errors.email = 'Email wajib di isi'
        
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)) {
        errors.email = 'Email tidak benar'
        //validasi pakai regex 
    }

    if (!values.password) {
        errors.password = 'Password wajib di isi'
    } else if (values.password.length < 6) {
        errors.password = 'Password kurang dari 6 karakter'
        
    }
    return errors;
}