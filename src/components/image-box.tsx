import { MdDeleteForever } from "react-icons/md";
import { ImageBoxProps } from "../Types";

const ImageBox = ({
  setImage,
  imageURL,
  imageBoxWidth = "w-full",
  imageBoxHeight = "h-full",
  imageBoxBorderRadius = "rounded-lg",
  imageBoxBorder = "border-2",
  imageBoxBorderColor = "border-gray-900",
  imageBoxBorderWidth = "border-2",
  imageBoxBorderStyle = "border-dashed",
  imageBoxBoxShadow = "shadow-lg",
  
}: ImageBoxProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center rounded-lg cursor-pointer border-2 border-dashed p-2 relative">
      <img src={imageURL} className="w-full h-full object-cover" alt="bentil" />
      <div
        onClick={() => setImage(null)}
        className="w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full text-white absolute bottom-5 right-5"
      >
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default ImageBox;
