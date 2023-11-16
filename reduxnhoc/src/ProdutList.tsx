import { useDispatch } from "react-redux";
import { AppDispatch } from "./state/store";
import { addItemToCart } from "./state/cartSlice";

export default function ProductList() {

    let dispacher = useDispatch<AppDispatch>();

    let products = [
        { id: 1, name: 'Apple', price: 100 },
        { id: 2, name: 'Banana', price: 200 },
        { id: 3, name: 'Cherry', price: 300 },
    ];
    
    function onAddToCart(product: any) {
        dispacher(addItemToCart({id: product.id, name: product.name, price: product.price, quantity: 1}))
    }

    return (
        <>
            {products.map((product) => <div>
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
                </div>
            )}
        </>
    )
}