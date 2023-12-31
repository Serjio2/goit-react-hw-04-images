import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ButtonLoadMore } from './Button/Button';
import { fetchImages } from './api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  handleChangeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { query, page } = this.state;
      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ loading: true });

        const data = await fetchImages(
          query.slice(query.indexOf('/') + 1),
          page
        );

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data],
            loading: false,
          };
        });
      }
    } catch (error) {
      this.setState({ error });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, images, loading } = this.state;
    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleChangeQuery} />
        {error && <p>Ooops, somthing wrong: {error.message}. Reload page.</p>}
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <ButtonLoadMore onClick={this.handleLoadMore} />
        )}
      </>
    );
  }
}
