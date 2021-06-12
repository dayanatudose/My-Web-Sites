export interface Values {
    username: string;
    email: string;
    telephone: string;
    password: string;
}
function validateInfo(value: Values) {
    let errors = {
        username: '',
        email: '',
        telephone: '',
        password: ''

    };

    if (!value.username.trim()) {
        errors.username = "Introduceti numele";
    }

    if (!value.email) {
        errors.email = "Introduceti o adresa de email valida";
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
        errors.email = "Adresa de email este invalida";
    }
    if (!value.password) {
        errors.password = "Introduceti o parola";
    } else if (value.password.length<8) {
        errors.password = "Parola trebuie sa fie de cel putin 8 caractere";
    }
    return errors;
}

export default validateInfo;