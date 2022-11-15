import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import { UploaderProps } from "../Types";

const Uploader = ({
  setImage,
  setImageURL,
  imageMaxSize,
  imageMaxWidth,
  imageMaxHeight,
  imageTypes = ["image/png", "image/jpeg", "image/jpg"],
  uploadText,
  uploadIcon,
  uploadTextColor,
  uploadTextSize,
  uploadTextFontWeight,
  borderRadius,
  border,
  borderColor,
  borderStyle,
  boxShadow,
}: UploaderProps) => {
  const onImageChange = (e: any) => {
    const image: File = e.target.files[0];
    // accept only image files
    if (!imageTypes.includes(image.type)) {
      toast.error("Please upload an image file");
      return;
    }
    // accept only files less than or equal to 1MB
    if (image.size > (imageMaxSize || 1000000)) {
      toast.error(
        `Please upload an image less than ${
          (imageMaxSize || 1000000) / 1000000
        }MB`
      );
      return;
    }

    // set image to state
    setImage(image);

    // create a new image URL
    const url = URL.createObjectURL(image);
    setImageURL(url);
  };
  return (
    <article
      className={`w-full h-full 
    ${uploadTextColor || "text-gray-900"} 
    ${uploadTextSize || "text-lg"}
    ${uploadTextFontWeight || "font-medium"}
    `}
    >
      <label
        htmlFor="file-upload"
        className={`w-full h-full flex flex-col justify-center items-center rounded-lg cursor-pointer p-10
          ${border || "border-2"}
          ${borderColor || "border-gray-200"}
          ${borderStyle || "border-dashed"}} 
          ${boxShadow || "shadow-lg"}
          ${borderRadius || "rounded-lg"}
          
        `}
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-2">
          {uploadIcon || (
            <MdCloudUpload className="text-gray-900 dark:text-white text-3xl " />
          )}
          <p className="mb-2 text-sm text-gray-900 dark:text-white">
            <span
              className={`font-semibold ${uploadTextColor || "text-gray-900"} `}
            >
              {uploadText || "Upload Image"}
            </span>
          </p>
          <p className="text-xs text-gray-900 dark:text-white">
            <span
              className={`${uploadTextColor || "text-gray-900"} `}
            >{`PNG, JPG, GIF up to 1MB with dimensions ${
              imageMaxWidth || null
            }x${imageMaxHeight || null}`}</span>
          </p>
        </div>
        <input
          id="file-upload"
          name="imageURI"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onImageChange(e)}
        />
      </label>
    </article>
  );
};

export default Uploader;
