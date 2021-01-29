import React from 'react';
import './ImageList.css';
import ImageCard from './imageCard';


const ImageList = (props) => {

    const image = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return(
        <div className="image-list">
            {image}
        </div>
    );
};

export default ImageList;