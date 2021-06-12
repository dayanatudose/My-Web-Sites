import {useState, useEffect} from 'react';

const useForm = (callback: any, validate: any) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        telephone: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        }, [callback, errors, isSubmitting]
    );
    return {handleChange, handleSubmit, values, errors};
}

export default useForm;