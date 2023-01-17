import { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory, GIFGrid } from './components'



const GifApp = ( {number} )  => {
    const [categories, setCategories] = useState([]);
    
    const onAddCategory = ( newCategory ) => {
        if(!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
        }    
    };

    
    return (
        <>
            <h1>GIF Gallery</h1>
            <AddCategory onNewCategory = { onAddCategory }/>
                {
                    categories.map(category => (<GIFGrid key={category} category={category} />)) 
                }
        </>
    );
}

GifApp.propTypes = {
   
};

GifApp.defaultProps = {
    
};

export default GifApp;