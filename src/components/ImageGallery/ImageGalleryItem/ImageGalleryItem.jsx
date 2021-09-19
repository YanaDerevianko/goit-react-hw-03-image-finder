import {ImageGalleryLi, ImageGalleryImg} from './ImageGalleryItem.styled';
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <ImageGalleryLi>
        <ImageGalleryImg 
        onClick ={() => onClick(src, alt)}
        src={src} 
        alt={alt}/>
    </ImageGalleryLi>
  );
};
ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};