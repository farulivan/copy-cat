import React from 'react';
import { styles } from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

const divStyles = styles.divStyles;
const imgStyles = styles.imgStyles;


export class CopyCat extends React.Component {
  render() {
    const { copying, toggleTape, value, handleChange, name } = this.props;
    
    return (
      <div style={divStyles} >
        <h1 style={{marginBottm: 80}}>Copy Cat {name || 'Tom'}</h1>
        <input 
          type='text'
          value={value}
          onChange={handleChange}
        />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={imgStyles}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}