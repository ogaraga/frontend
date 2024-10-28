import { useState } from "react";

function useModal() {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(!modal);
  };

  return [handleOpenModal, modal];
}

export default useModal;
