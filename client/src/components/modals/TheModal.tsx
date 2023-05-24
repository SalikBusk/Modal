'use client';

import { useCallback, useState } from "react";
import useModal from "../../hooks/useModal";
import Modal from "./Modal";



const TheModal = ({}) => {
    const modal = useModal();
  const [isLoading, setIsLoading] = useState(false);


  const onToggle = useCallback(() => {
    modal.onClose();
  }, [modal])

  const bodyContent = (
    <div>
        Modal body Content
    </div>
  )

  const footerContent = (
    <div>
        Modal Footer Content
    </div>
  )

  return (
    <Modal
      isOpen={modal.isOpen}
      title="Modal Component"
      onClose={modal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default TheModal;
