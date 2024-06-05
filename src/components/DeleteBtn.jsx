import React from "react";
import "./DeleteBtn.css";

const DeleteBtn = ({ onDelete, id }) => {
    return (
        <button onClick={() => onDelete(id)} className="delete-btn">
            x
        </button>
    );
}

export default DeleteBtn;