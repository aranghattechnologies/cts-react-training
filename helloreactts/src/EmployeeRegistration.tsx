import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import DesignationSelector from './DesignationSelector';
import { employee } from './employee';

export default function EmployeeRegistration() {

    let [state, setState] = React.useState<employee>
        ({ name: '', age: 0, salary: 0, designation: '' });

    //let {register,handleSubmit,formState: errors} = useForm<employee>();
    let methods = useForm<employee>();

    let ageTxtRef = React.useRef<HTMLInputElement>(null);

    function handleSave(data: any) {
        console.log(data);
    }

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSave)}>
                    <div>
                        <input type='text' placeholder='Enter Name' {...methods.register("name",
                            {
                                required: true
                                , minLength: 3
                                , maxLength: 15
                                , pattern: /^[a-zA-Z ]+$/
                            })} />
                        {methods.formState.errors && methods.formState.errors?.name && <p>Name is required and must be between 3 - 15 chars</p>}
                        {/* {errors && errors?.errors.name?.type === 'minLength' && <p>Name must be atlest 3 characters</p>}
                        {errors && errors?.errors.name?.type === 'maxLength' && <p>Name must be max of 15 characters</p>}
                        {errors && errors?.errors.name?.type === 'pattern' && <p>Name must be alphabets only</p>} */}
                    </div>

                    <div>
                        <input type='number' placeholder='Enter Age' {...methods.register("age",
                            {
                                required: true
                                , min: 18
                                , max: 60
                            })} />
                        {methods.formState.errors && methods.formState.errors?.age && <p>Age is required and must be between 18 and 60</p>}
                    </div>
                    <input type='number' placeholder='Enter Salary' />
                    <DesignationSelector />
                    <button type="submit">Register Employee</button>
                </form>
            </FormProvider>
        </>
    )
}