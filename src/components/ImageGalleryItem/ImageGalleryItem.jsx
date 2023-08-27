import { ModalWin } from 'components/Modal/Modal';
import { StyledImageGalleryItem } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags }
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <StyledImageGalleryItem>
        <img src={webformatURL} alt={tags} onClick={openModal} />
        <ModalWin
          isModalOpen={isModalOpen}
          isModalClose={closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </StyledImageGalleryItem>
    </>
  );
};

// ******************************************
// use class

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => this.setState({ isModalOpen: true });
//   closeModal = () => this.setState({ isModalOpen: false });

//   render() {
//     const { webformatURL, tags } = this.props.image;
//     const { isModalOpen } = this.state;
//     return (
//       <>
//         <StyledImageGalleryItem>
//           <img src={webformatURL} alt={tags} onClick={this.openModal} />
//           <ModalWin
//             isModalOpen={isModalOpen}
//             isModalClose={this.closeModal}
//             imgModal={this.props.image}
//           />
//         </StyledImageGalleryItem>
//       </>
//     );
//   }
// }
