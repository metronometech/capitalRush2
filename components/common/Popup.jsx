"use client"
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./popup.css"

const Popup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="">
        <p className=" text-[32px] text-white font-poppins">Thanks for showing interest in our 
        game,The button will work for mobile device only.</p>
      </div>
    </Modal>
  );
};

export default Popup;
