import React from "react";
import { PackageProps } from "../Types";
import ImageBox from "./image-box";
import Uploader from "./uploader";

const ReactImageUpload = ({ options }: { options: PackageProps }) => {
  const {
    uploadText,
    uploadIcon,
    uploadIconSize,
    uploadIconColor,
    uploadTextColor,
    uploadTextSize,
    uploadTextFontWeight,
    imageBoxWidth,
    imageBoxHeight,
    borderRadius,
    border,
    borderColor,
    borderStyle,
    boxShadow,
    image,
    setImage,
    imageURL,
    setImageURL,
  } = options;
  return (
    <>
      {image ? (
        <ImageBox
          setImage={setImage}
          setImageURL={setImageURL}
          imageURL={imageURL}
          imageBoxWidth={imageBoxWidth}
          imageBoxHeight={imageBoxHeight}
          borderRadius={borderRadius}
          border={border}
          borderColor={borderColor}
          borderStyle={borderStyle}
          boxShadow={boxShadow}
        />
      ) : (
        <Uploader
          setImageURL={setImageURL}
          setImage={setImage}
          uploadText={uploadText}
          uploadIcon={uploadIcon}
          uploadIconSize={uploadIconSize}
          uploadIconColor={uploadIconColor}
          uploadTextColor={uploadTextColor}
          uploadTextSize={uploadTextSize}
          uploadTextFontWeight={uploadTextFontWeight}
        />
      )}
    </>
  );
};

export default ReactImageUpload;
