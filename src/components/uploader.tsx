import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";

const Uploader = ({setImage, setImageURL}: {setImage: (e:any)=> void, setImageURL: (e:any)=> void}) => {
  const onImageChange = (e:any) => {
    const image:File = e.target.files[0];
    // accept only image files
    if (!image.type.match("image.*")) {
      toast.error("Please select an image file");
      return;
    }
    // accept only files less than or equal to 1MB
    if (image.size > 1000000) {
      toast.error("File size must be less than 1MB");
      return;
    }

    // set image to state
    setImage(image)

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
          <MdCloudUpload className="text-gray-500 text-3xl " />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click here to upload</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG OR JPG (MAX. 400x400px)
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
