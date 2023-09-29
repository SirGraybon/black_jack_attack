import { motion } from "framer-motion";

import "../styles/modal.css";

import shareState from "../state/StateContext";

const Modal = function () {
  const { toggleModal } = shareState();

  return (
    <div className="backDrop" onClick={() => toggleModal()}>
      <motion.div className="modal"></motion.div>
    </div>
  );
};

export default Modal;
