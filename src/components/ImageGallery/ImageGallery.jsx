import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </StyledImageGallery>
  );
};
