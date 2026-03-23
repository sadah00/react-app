import React from 'react'
import { useState } from 'react';
import { createProductService } from '../services/createProductService';

export const useCreateProducts = () => {

    const[productData, setProductData] = useState({
        name: '',
        buying_price: '',
        selling_price: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProductData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await createProductService(productData);
            setProductData({
                name: '',
                buying_price: '',
                selling_price: '',
            });
        } catch (error) {
            setError("Failed to create product. Please try again.");
        }
    }

    return {
        productData,
        handleChange,
        handleSubmit
    }

}
