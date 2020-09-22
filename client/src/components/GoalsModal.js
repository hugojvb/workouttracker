import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const GoalsModal = () => {
  const context = useContext(Context);
  const { showGoalsModal, closeGoalsModal } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showGoalsModal}
        onClose={closeGoalsModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>context.activity.goals</p>
      </Modal>
    </div>
  );
};

export default GoalsModal;
