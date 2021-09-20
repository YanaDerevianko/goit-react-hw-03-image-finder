import { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../../services/api";
import { AppDiv } from "./App.styled";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { MyLoader } from "../Loader/Loader";

export class App extends Component {
  state = {
    imageName: null,
    images: [],
    page: 1,
    selectedImage: null,
    loading: false,
    error: null,
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  handleSelectedImage = (src, alt) => {
    this.setState({ selectedImage: { src, alt } });
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  async componentDidUpdate(_, prevState) {
    const { images } = this.state;
    if (prevState.imageName !== this.state.imageName) {
      this.toggleLoaderVisible();
      const images = await fetchImages(this.state.imageName);
      this.setState({ images });
      this.toggleLoaderVisible();
    }
  
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  loadMore = () => {
    this.toggleLoaderVisible();
    setTimeout(
      this.setState({ page: this.state.page + 1 }, () => {
        this.handleFetchResponse();
      }),
      2000
    );
  };

  handleFetchResponse = () => {
    const { imageName, page } = this.state;
    try {
      fetchImages(imageName, page).then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
        }));
        this.toggleLoaderVisible();
      });
    } catch (error) {
      alert(error);
    }
  };

  toggleLoaderVisible = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    const { images, selectedImage, loading } = this.state;
    return (
      <AppDiv>
        <Searchbar onSearch={this.handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onSelect={this.handleSelectedImage} />
        )}
        {loading && <MyLoader />}
        {images.length > 0 && <Button onClick={this.loadMore} />}
        {selectedImage && (
          <Modal closeModal={this.closeModal} selectedImage={selectedImage} />
        )}
        <Toaster position="top-right" />
      </AppDiv>
    );
  }
}
