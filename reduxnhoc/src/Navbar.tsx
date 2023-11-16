import { useSelector } from "react-redux"
import { RootState } from "./state/store";
export default function TopNavBar(){

    let cartItems = useSelector((state: RootState) => state.cart).items;

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="nav">
                <ul className="nabar nav">
                    <li className="nav-item text-white">
                        Cart <div className="badge badge-danger bg-danger">
                            {cartItems.length}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}