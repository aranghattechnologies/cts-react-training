import DiscountLabel from "./DiscoundLabel";

export default function Product({title}) {
    return (
       <div>
             <h1>{title}</h1>
             <DiscountLabel  />
       </div>
    )
}

