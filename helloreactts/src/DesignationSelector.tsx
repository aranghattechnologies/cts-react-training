import { useForm, useFormContext } from "react-hook-form";
import { employee } from "./employee";

export default function DesignationSelector(){
    let {register,formState: errors} = useFormContext<employee>();
    return (
        <>
        <select {...register("designation",{required:true})}>
            <option value=''>Select Designation</option>
            <option value='Manager'>Manager</option>
            <option value='Developer'>Developer</option>
            <option value='Tester'>Tester</option>
        </select>
        {errors && errors?.errors.designation && <p>Designation is required</p>}
        </>
    )
}