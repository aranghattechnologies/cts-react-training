import { TestComponentProps } from "./TestComponentProps";

export default function TestComponent({title,isupperCase,color}: TestComponentProps)
{
    return(
        <div>
            <h1 style={{color : color?? color}}>{isupperCase ? title.toUpperCase() : title}</h1>
        </div>
    )
}