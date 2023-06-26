import { MdCloudUpload } from "react-icons/md";
import { UploaderProps } from "../Types";
import { toast } from "react-toastify";

const Uploader = ({
  setImage,
  setImageURL,
  imageMaxSize,
  imageMaxWidth,
  imageMaxHeight,
  imageTypes = ["image/png", "image/jpeg", "image/jpg"],
  uploadText,
  uploadIcon,
  extraClass,
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
        `Please upload an image less than ${(imageMaxSize || 1000000) / 1000000
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
      className={`w-full h-full text-gray-900 text-lg font-medium flex flex-col justify-center items-center rounded-lg cursor-pointer p-10
    ${extraClass} 
    `}
    >
      <label
        htmlFor="file-upload"
        className={`w-full h-full flex flex-col justify-center items-center cursor-pointer p-10
        border-2 border-gray-200 border-dashed shadow-lg rounded-lg ${extraClass}`}
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-2">
          {uploadIcon || (
            <MdCloudUpload className="text-gray-900 dark:text-white text-3xl " />
          )}
          <p className="mb-2 text-sm text-gray-900 dark:text-white">
            <span
              className={`font-semibold ${"text-gray-900"} `}
            >
              {uploadText || "Upload Image"}
            </span>
          </p>
          <p className="text-xs text-gray-900 dark:text-white">
            <span
              className={`"text-gray-900"} `}
            >{`PNG, JPG, GIF up to 1MB with dimensions ${imageMaxWidth || null
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
