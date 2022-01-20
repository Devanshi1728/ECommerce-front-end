import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompnay] = useState('');
    const [error, setError] = useState(false)

    const addProduct = () => {
        const id = JSON.parse(localStorage.getItem('user'))._id;
        if(name && price && category && company)
        {
            axios.post('http://localhost:3000/addProducts',{
                name: name,
                price: price,
                category: category,
                company: company,
                userID: id
            }).then(res => {
                console.log("res",res)
            }).catch(err => {
                console.log("error =",err)
            })
        }else{
            setError(true)
        }
    }


    return (
        <div className='product'>
            <h1>Add Product</h1>
            {error && !name && <span className='invalid-input'>Name is required</span>}
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>price is required</span>}
            <input type="number" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !category && <span className='invalid-input'>category is required</span>}
            <input type="text" placeholder='Enter product category' className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            {error && !company && <span className='invalid-input'>company is required</span>}
            <input type="text" placeholder='Enter product company' className='inputBox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}
            />
            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;