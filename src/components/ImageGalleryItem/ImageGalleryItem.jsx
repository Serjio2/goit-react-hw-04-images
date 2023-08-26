import { ModalWin } from 'components/Modal/Modal';
import { StyledImageGalleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { webformatURL, tags } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <StyledImageGalleryItem>
          <img src={webformatURL} alt={tags} onClick={this.openModal} />
          <ModalWin
            isModalOpen={isModalOpen}
            isModalClose={this.closeModal}
            imgModal={this.props.image}
          />
        </StyledImageGalleryItem>
      </>
    );
  }
}
