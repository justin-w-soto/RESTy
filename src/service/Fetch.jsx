import React from 'react';

export const getApi = async(url) => {
    const { body } = await req.get(url);
    return body;
}
