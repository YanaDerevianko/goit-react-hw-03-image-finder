import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { ImgGallery } from "./ImageGallery.styled";
export const ImageGallery = ({ images }) => {
  return (
    <ImgGallery>
      {images.map(({ id, largeImageURL, webformatURL, tags, onSelect}) => (
        <ImageGalleryItem
          onClick={() => onSelect(largeImageURL)}
          key={id}
          src={webformatURL}
          tags={tags}
        />
      ))}
    </ImgGallery>
  );
};
