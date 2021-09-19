import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { ImgGallery } from "./ImageGallery.styled";
import PropTypes from "prop-types";

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <ImgGallery>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          onClick={onSelect}
          key={id}
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ImgGallery>
  );
};

ImageGallery.propTypes = {
  onSelect: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};