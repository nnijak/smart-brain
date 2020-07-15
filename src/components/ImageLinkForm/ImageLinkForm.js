import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic AI will detect faces in your pictures. Try it out."}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input
            className="input f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="button w-30 grow f4 link ph3 pv2 dib white"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
