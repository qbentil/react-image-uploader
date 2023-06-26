import ReactImageUpload from "./components";
import { useState } from "react";

const ReactImageUploader = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

  let uploaderOptions = {
    uploadText: "Upload Photo",
    image,
    setImage,
    imageURL,
    setImageURL,
    borderStyle: 'border-dashed border-2',
  }
  return (
    <main className="w-screen h-screen bg-orange-400 flex items-center justify-center">
      <div className="h-72">
        <ReactImageUpload options = {uploaderOptions} />
      </div>
    </main>
  );
};

export default ReactImageUploader;
