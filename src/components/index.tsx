import ImageBox from "./image-box";
import { PackageProps } from "../Types";
import Uploader from "./uploader";

const ReactImageUpload = ({ options }: { options: PackageProps }) => {
  const {
    uploadText,
    uploadIcon,
    image,
    setImage,
    imageURL,
    setImageURL,
    extraClass
  } = options;
  return (
    <>
      {image ? (
        <ImageBox
          setImage={setImage}
          setImageURL={setImageURL}
          imageURL={imageURL}
          extraClass={extraClass}
        />
      ) : (
        <Uploader
          setImageURL={setImageURL}
          setImage={setImage}
          uploadText={uploadText}
          uploadIcon={uploadIcon}
          extraClass={extraClass}
        />
      )}
    </>
  );
};

export default ReactImageUpload;
