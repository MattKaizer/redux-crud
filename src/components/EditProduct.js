import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editProductAction} from '../actions/productActions';
import { useHistory } from 'react-router-dom';


const EditProduct = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [productState, setProductState] = useState({
        name: '',
        price: 0
    });
    const product = useSelector(state => state.products.productEdit);

    useEffect(() => {
        setProductState(product);
    }, [product]);

    // read data
    const onChangeForm = e => {
        setProductState({
            ...productState,
            [e.target.name] : e.target.value
        })
    }

    // console.log(product)
    // if(!product) return null;

    const { name, price } = productState;

    const submitNewProduct = e => {
        e.preventDefault()
        dispatch(editProductAction(productState));
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Edit Product
                    </h2>

                    {/* alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null  */}

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
                                onChange={onChangeForm}
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
                                onChange={onChangeForm}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >Save</button>
                    </form>

                    {/*  cargando ? <p>Cargando...</p> : null  */}
                    
                    { /* error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null */ }
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EditProduct;