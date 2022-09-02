import React from "react";
import ImageBox from "./components/image-box";
import Uploader from "./components/uploader";

const App = () => {
  const [image, setImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState('');
  return (
    <div className={'w-72 h-72'}>
      {image ? (
        <ImageBox setImage={setImage} imageURL={imageURL} />
      ) : (
        <Uploader setImageURL={setImageURL} setImage={setImage} />
      )}
    </div>
  );
}

export default App;
