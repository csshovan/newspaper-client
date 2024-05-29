import React from 'react';
import axiosSecure from '../../api';
import { useQuery } from '@tanstack/react-query';

const ArticleSlider = () => {
    const getProducts = async () => {
        const res = await axiosSecure.get(`/article`)
        return res
    }

    const {
        data: articles,
        isLoading,
        isSuccess,
    } = useQuery({
        queryKey: ['article'],
        queryFn: getProducts,
    })

    console.log(articles?.data);
   
    return (
        <div>
            
        </div>
    );
};

export default ArticleSlider;