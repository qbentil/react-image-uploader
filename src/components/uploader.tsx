import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import { UploaderProps } from "../Types";

const Uploader = ({
  setImage,
  setImageURL,
  imageMaxSize = 1000000,
  imageMaxWidth = 1920,
  imageMaxHeight = 1080,
  imageTypes = ["image/png", "image/jpeg", "image/jpg"],
  uploadText = "Upload Image",
  uploadIcon = (
    <MdCloudUpload className="text-gray-900 dark:text-white text-3xl " />
  ),
  uploadTextColor = "text-gray-900",
}: UploaderProps) => {
  const onImageChange = (e: any) => {
    const image: File = e.target.files[0];
    // accept only image files
    if (!imageTypes.includes(image.type)) {
      toast.error("Please upload an image file");
      return;
    }
    // accept only files less than or equal to 1MB
    if (image.size > imageMaxSize) {
      toast.error(
        `Please upload an image less than ${imageMaxSize / 1000000}MB`
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
    <article className="w-full h-full">
      <label
        htmlFor="file-upload"
        className="w-full h-full flex flex-col justify-center items-center rounded-lg cursor-pointer border-2 border-dashed p-10"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-2">
          {uploadIcon}
          <p className="mb-2 text-sm text-gray-900 dark:text-white">
            <span className={`font-semibold ${uploadTextColor} `}>{uploadText}</span>
          </p>
          <p className="text-xs text-gray-900 dark:text-white">
            <span className={`${uploadTextColor} `}>{`PNG, JPG, GIF up to 1MB with dimensions ${imageMaxWidth}x${imageMaxHeight}`}</span>
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
