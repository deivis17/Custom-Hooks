import { useState } from "react";

export const useForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm);
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value,
        });
      }

      const onResetForm = ()=>{
        const emptyForm = {};
        Object.keys(initialForm).forEach((key) => {
            emptyForm[key] = "";
          });
          setFormState(emptyForm);
      }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
