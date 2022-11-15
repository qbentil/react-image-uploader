import { useState } from "react";
import ImageBox from "./components/image-box";
import Uploader from "./components/uploader";

const ReactImageUploader = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");
  return (
    <main className="w-screen h-screen bg-orange-400 flex items-center justify-center">
      <div className="w-96 h-72">
        {image ? (
          <ImageBox
            setImage={setImage}
            setImageURL={setImageURL}
            imageURL={imageURL}
          />
        ) : (
          <Uploader setImageURL={setImageURL} setImage={setImage} />
        )}
      </div>
    </main>
  );
};

export default ReactImageUploader;
