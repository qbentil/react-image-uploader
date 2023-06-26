import { ImageBoxProps } from "../Types";
import { MdDeleteForever } from "react-icons/md";

const ImageBox = ({
  setImage,
  imageURL,
  setImageURL,
  extraClass
}: ImageBoxProps) => {
  const Delete = () => {
    setImage(null);
    setImageURL("");
  };
  return (
    <div
      className={`flex flex-col justify-center items-center  cursor-pointer  p-2 relative
        border-gray-900 border-dashed shadow-lg w-full h-full rounded-lg
      ${extraClass}
    `}
    >
      <img
        src={imageURL}
        className="w-full h-full object-cover"
        alt="imageuploaderimage"
      />
      <div
        onClick={Delete}
        className="w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full text-white absolute bottom-5 right-5"
      >
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default ImageBox;
