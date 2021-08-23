import React from 'react';
import imageUrl from './assets/1.png'

const Apps = (): React.ReactElement =>
{
    return (
        <div>
            <p>Apps content</p>
            <img src={imageUrl} alt="" />
        </div>
    )
}

export default Apps;