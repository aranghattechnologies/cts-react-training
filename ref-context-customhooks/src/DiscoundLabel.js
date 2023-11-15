import DiscountContext from "./DiscountContext";
import {useContext} from 'react';

export default function DiscountLabel() {
   let isDiwaliDiscountActive = useContext(DiscountContext);

    return (
       <div>
                {isDiwaliDiscountActive ? <h1>Diwali Discount 10%</h1> : null}
       </div>
    )
}