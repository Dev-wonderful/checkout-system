import React from 'react';

interface ModalProps{
  children: string;
  open: boolean
}

const Modal: React.FC<ModalProps> = ({children, open}) => {
  return ( 
    <div className={open ? 'modal-styles' : 'modal-close'}>
      {children}
    </div>
    );
}
 
export default Modal;