import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux Actions
import {addNewProductAction} from '../actions/productActions';
import {hideAlertAction, showAlertAction} from '../actions/alertActions';

const NewProduct = ({history}) => {
    // state just for this component
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    // access to store state
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const alerta = useSelector(state => state.alert.alerta);
    // this call the product action
    const addProduct = product => dispatch(addNewProductAction(product));
    // when submit
    const submitNewProduct = e => {
        e.preventDefault();
        // validate
        if (name.trim() === '' || price <= 0) {

            const alert = {
                msg: 'Both fields are required',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlertAction(alert));
            return;
        }
        // check errors
        dispatch(hideAlertAction())

        // add new product
        addProduct({
            name,
            price
        });
        // redirect
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Add New Product
                    </h2>

                    {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null }

                    <form
                        onSubmit={submitNewProduct}
                    >
                        <div className="form-group">
                            <label>Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Price</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Product Price"
                                name="price"
                                value={price}
                                onChange={e =>  setPrice( Number(e.target.value) )}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >Add</button>
                    </form>

                    { loading ? <p>Loading...</p> : null }
                    
                    { error ? <p className="alert alert-danger p2 mt-4 text-center">An error happened</p> : null }
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default NewProduct;