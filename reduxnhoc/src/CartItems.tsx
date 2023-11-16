import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { removeFromCart } from "./state/cartSlice";

export default function CartItems() {

    let cartItems = useSelector((state: RootState) => state.cart).items;
    let dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <div className="list-group mt-5">
                {cartItems.map((item) => <div className="list-group-item">
                    <div className="row">
                        <div className="col">
                            {item.name}
                        </div>
                        <div className="col">
                            {item.price}
                        </div>
                        <div className="col">
                           <input type="number" className="form-control text-center form-control-sm" value={item.quantity} />
                        </div>
                        <div className="col">
                            {item.price * item.quantity}
                        </div>
                        <div className="col">
                            <button type="button" 
                                onClick={() => dispatch(removeFromCart(item.id))}
                            className="btn btn-sm btn-danger">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>)}
                <div className="list-group-item">
                    Total Bill Amount : <span className="fw-bolder text-success">{cartItems.reduce((current,item) => current + (item.quantity * item.price),0)}</span>
                </div>
            </div>
           
        </>
    )

}