import {ImageGalleryLi, ImageGalleryImg} from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ src, tags }) => {
  return (
    <ImageGalleryLi>
        <ImageGalleryImg src={src} alt={tags} />
    </ImageGalleryLi>
  );
};
