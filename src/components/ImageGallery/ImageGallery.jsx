import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { ImgGallery } from "./ImageGallery.styled";
export const ImageGallery = ({ images, onSelect }) => {
  return (
    <ImgGallery>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          onClick={() => onSelect(largeImageURL)}
          key={id}
          src={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ImgGallery>
  );
};
