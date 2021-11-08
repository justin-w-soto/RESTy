import React from 'react';

const getApi = async(url) => {
    const { body } = await req.get(url);
    return body;
}
