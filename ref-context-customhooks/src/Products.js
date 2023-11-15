import DiscountContext from "./DiscountContext"
import {useState} from 'react';
import Product from "./Product";
import { useParams } from "react-router-dom";
export default function Products(){

    let [isDiwaliDiscountActive,setIsDiwaliDiscountActive] = useState(true);
    let {type} = useParams();

    return (
        <>
        <h1>{type}</h1>
        <button type='button' onClick={() => setIsDiwaliDiscountActive(!isDiwaliDiscountActive)}>Toggle Discount</button>
    <DiscountContext.Provider value={{isDiwaliDiscountActive, discountPer: 10}}>
        <Product title={"Iphone 15"} />
    </DiscountContext.Provider>
    <hr />
    <DiscountContext.Provider value={!isDiwaliDiscountActive}>
        <Product title={"Macbook Pro"} />
    </DiscountContext.Provider>

    <hr />
    <DiscountContext.Provider value={true}>
        <Product title={"Macbook Pro"} />
        <Product title={"Apple Watch"} />
        <Product title={"Airpods"} />
        <Product title={"Apple TV"} />
    </DiscountContext.Provider>
        </>
    )
}