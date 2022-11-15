import { MdDeleteForever } from "react-icons/md";
import { ImageBoxProps } from "../Types";

const ImageBox = ({
  setImage,
  imageURL,
  setImageURL,
  imageBoxWidth,
  imageBoxHeight,
  borderRadius,
  border,
  borderColor,
  borderStyle,
  boxShadow,
}: ImageBoxProps) => {
  const Delete = () => {
    setImage(null);
    setImageURL("");
  };
  return (
    <div
      className={`flex flex-col justify-center items-center  cursor-pointer  p-2 relative
      ${border}
      ${borderColor || "border-gray-900"}
      ${borderStyle || "border-dashed"}
      ${boxShadow || "shadow-lg"}
      ${imageBoxWidth || "w-full"}
      ${imageBoxHeight || "h-full"}
      ${borderRadius || "rounded-lg"}
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
