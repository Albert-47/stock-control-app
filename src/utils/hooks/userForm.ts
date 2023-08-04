import { useState } from 'react';

export default function useForm(initialState: any = {}) {
    const [inputs, setInputs] = useState(initialState);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    return [inputs, handleChange, setInputs];
}
