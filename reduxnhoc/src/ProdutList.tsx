import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { addItemToCart } from "./state/cartSlice";
import { Product, fetchProductsAsync } from "./state/productSlice";
import { useEffect } from "react";

export default function ProductList() {

    let dispacher = useDispatch<AppDispatch>();
    let products = useSelector((state:RootState) => state.products).products;

    useEffect(() => {
        dispacher(fetchProductsAsync())
    },[]);


    function onAddToCart(product: any) {
        dispacher(addItemToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 }))
    }

    return (
        <>
            {products.map((product:Product) => <div className="card my-3">
                <img src={product.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">

                    <div className="row">
                        <div className="col">
                            <h2>{product.title}</h2>
                        </div>
                        </div>
                        <div className="row">
                           <div className="col">
                           <p>{product.description}</p>
                           </div>
                        </div>
                </div>
            </div>
            )}
        </>
    )
}