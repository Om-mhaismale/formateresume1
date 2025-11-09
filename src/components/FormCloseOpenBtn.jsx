import React, { } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const FormCloseOpenBtn = ({ formClose, setFormClose }) => {
  return (
    <button
      aria-label="Form Open/Close"
      className="font-bold rounded-full bg-white text-[#0a66c2] shadow-lg border-2 border-white"
      onClick={() => setFormClose(!formClose)}
    >
      {formClose ? <BsFillArrowRightCircleFill className="w-10 h-10" title="Form Open" /> : <BsFillArrowLeftCircleFill className="w-10 h-10" title="Form Close" />}
    </button>
  )
}

export default FormCloseOpenBtn;
