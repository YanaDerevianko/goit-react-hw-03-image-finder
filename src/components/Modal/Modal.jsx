import React, { Component } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from "prop-types";

export class Modal extends Component {
  componentDidMount() {
    if (this.props.selectedImge !== null) {
      window.addEventListener("keydown", this.handleKeyPress);
      document.body.className = "noScroll";
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
    document.body.className = "";
  }

  handleKeyPress = (e) => {
    if (e.key === "Escape") {
      this.props.closeModal();
    }
  };
  handleOverlayClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props.selectedImage;
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWindow>
          <img src={src} alt={alt} />
        </ModalWindow>
      </Overlay>
    );
  }
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedImage: PropTypes.object,
};