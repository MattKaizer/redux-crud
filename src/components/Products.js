import React, { Fragment, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {getProductsAction} from '../actions/productActions';
import Product from './Product';

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadingProducts = () => dispatch(getProductsAction());
        loadingProducts();
        // eslint-disable-next-line
    }, []);

    // get state
    const products = useSelector(state => state.products.products);
    // console.log(products);

    return ( 
        <Fragment>
        <h2 className="text-center my-5">Product List</h2>

        { /* error ? <p className="font-weight-bold alert alert-danger text-center mt-4">There was an error error</p> : null  */}
        
        {/*  cargando ? <p className="text-center">Loading....</p> : null */ }

        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                 <tr>
                     <th scope="col">Name</th>
                     <th scope="col">Price</th>
                     <th scope="col">Actions</th>
                 </tr>
            </thead>
            <tbody>
                { products.length === 0 ? 'No hay productos' : (
                    products.map(product => (
                        <Product
                             key={product.id}
                             product={product}
                        />
                    ))
                ) }
            </tbody>
        </table>
    </Fragment>
     );
}
 
export default Products;