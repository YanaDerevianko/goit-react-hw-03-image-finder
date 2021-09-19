import {Overlay, ModalWindow} from './Modal.styled'
export const Modal = ({closeModal, src, alt}) => {
  return (
    <Overlay onClick ={closeModal}>
      <ModalWindow>
        <img src={src} alt={alt}/>
      </ModalWindow>
    </Overlay>
  );
};
