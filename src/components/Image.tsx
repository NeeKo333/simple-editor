import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Image = React.memo(() => {
  const [picture, setPicture] = useState<string>("");

  const id: string = useMemo(() => uuidv4(), []);

  const readFile = (e: React.ChangeEvent): void => {
    const input = e.target as HTMLInputElement;

    const Freader = new FileReader();

    if (input.files) {
      Freader.readAsDataURL(input.files[0]);
    }

    Freader.onload = function (e: ProgressEvent<FileReader>): void {
      const imgSrc = e.target?.result as string;
      setPicture(imgSrc);
    };
  };

  return (
    <div>
      {picture ? (
        <div className="uploaded-img">
          <img src={picture} alt=""></img>
        </div>
      ) : (
        <>
          <label htmlFor={id} className="upload-img-label">
            Upload Image
          </label>
          <input
            className="image-input"
            id={id}
            onChange={(e) => {
              readFile(e);
            }}
            type="file"
            accept=".jpg, .jpeg, .png"
          ></input>
        </>
      )}
    </div>
  );
});

export default Image;
