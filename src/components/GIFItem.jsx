import PropTypes from 'prop-types';
export const GIFItem = ({id, title, url}) => {
  
    return (
        <div className="card">
            <img src = {url} alt={title}/>
            <p>{title}</p>
        </div> 
  )
};

GIFItem.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
};

