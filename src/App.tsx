import React from "react";
import ImageBox from "./components/image-box";
import Uploader from "./components/uploader";

const App = () => {
  const [image, setImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState('');
  return (
    <main className='w-screen h-screen bg-orange-400 flex items-center justify-center'>
          <div className={'w-72 h-72'}>
      {image ? (
        <ImageBox setImage={setImage} imageURL={imageURL} />
      ) : (
        <Uploader setImageURL={setImageURL} setImage={setImage} />
      )}
    </div>
    </main>
  );
}

export default App;
