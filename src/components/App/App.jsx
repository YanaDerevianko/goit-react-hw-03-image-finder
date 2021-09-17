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
    selectedImage: null,
    showModal: false,
  };
  handleSelectedImage = (largeImageURL) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      selectedImage: largeImageURL,
    }));
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };
  async componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      const images = await fetchImages(this.state.imageName);
      if (this.state.imageName === "") {
        toast("Enter your request!");
      } else if (!images.length) {
        toast("No results were found for your search");
      }
      this.setState({ images });
    }
  }

  render() {
    const { images, selectedImage, showModal} = this.state;
    return (
      <AppDiv>
        <Searchbar onSearch={this.handleFormSubmit} />
        <ImageGallery images={images} onSelect={this.handleSelectedImage} />
        {images.length > 1 && <Button onClick={5} />}
        {this.state.selectedImage && <Modal />}
        <Toaster position="top-right" />
      </AppDiv>
    );
  }
}
