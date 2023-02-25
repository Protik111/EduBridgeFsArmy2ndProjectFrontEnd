import { Stack } from '@mui/material';
import React from 'react';
import FindSingleItem from './FindSingleItem';

const itemsList = [
    {
        id: 1,
        title: 'Photo',
        image: '/icons/photo.png'
    },
    {
        id: 2,
        title: 'Time',
        image: '/icons/watch.png'
    },
    {
        id: 3,
        title: 'Category',
        image: '/icons/category.png'
    },
    {
        id: 4,
        title: 'Pdf',
        image: '/icons/pdf.png'
    },
]

const FindItems = () => {
    return (
        <Stack direction='row'>
            {
                itemsList?.map(item => <FindSingleItem key={item?.id} item={item}></FindSingleItem>)
            }
        </Stack>
    );
};

export default FindItems;