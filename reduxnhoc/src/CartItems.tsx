import { useSelector } from "react-redux";
import { RootState } from "./state/store";

export default function CartItems() {

    let cartItems = useSelector((state: RootState) => state.cart).items;

    return (
        <>
            <div className="list-group">
                {cartItems.map((item) => <div className="list-group-item">
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <h4>{item.quantity}</h4>
                    <h4>{item.price * item.quantity}</h4>
                </div>)}
            </div>
            <h1>Total Bill Amount : {cartItems.reduce((current,item) => current + (item.quantity * item.price),0)}</h1>
        </>
    )

}