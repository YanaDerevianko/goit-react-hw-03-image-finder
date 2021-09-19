import { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../../services/api";
import { AppDiv } from "./App.styled";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

export class App extends Component {
  state = {
    imageName: null,
    images: [],
    page: 1,
    isSelectedImage: false,
    loading: false,
    error: null,
    largeImageURL: null,
  };

  openModal = (largeImageURL) => {
    this.setState({ largeImageURL });
  };

  closeModal = (e) => {
    if (e.target.nodeName !== "IMG" || e.code === "Escape") {
      this.setState({ isSelectedImage: false, largeImageURL: null});
      window.removeEventListener("keydown", this.closeModal);
    }
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      const images = await fetchImages(this.state.imageName);
      if (this.state.imageName === "") {
        toast("Enter your request!");
      }if (!images.length) {
        toast("No results were found for your search");
      }
      this.setState({ images });
    }
  }
  
  render() {
    const { images, isSelectedImage } = this.state;
    const { tags, largeImageURL } = this.props;
    return (
      <AppDiv>
        <Searchbar onSearch={this.handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onSelect={this.openModal} />
        )}
        {images.length > 0 && <Button  />}
        {isSelectedImage && (
          <Modal closeModal={this.closeModal} src={largeImageURL} alt={tags} />
        )}
        <Toaster position="top-right" />
      </AppDiv>
    );
  }
}
