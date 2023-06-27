# React-Image-Uploader

## :dart: About

An open source React and Tailwind package for image preview before upload.

## Installation

`npm install react-image-upload --save`

## Usage

```jsx
  import ImageUpload from 'react-image-upload';
  import { useState } from "react";

  const App = () => {
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState("");

    let uploaderOptions = {
      uploadText: "Upload Photo",
      image,
      setImage,
      imageURL,
      setImageURL,
    };
    return (
      <main className="w-screen h-screen bg-orange-400 flex items-center justify-center">
        <div className="h-72">
          <ImageUpload options={uploaderOptions} />
        </div>
      </main>
    );
  };

  export default App;
```

## License

MIT License

Copyright (c) 2020-present, React-Image-Uploader

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## :rocket: Technologies

The following tools were used in this project:

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React-Icons](https://react-icons.github.io/react-icons/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [React](https://reactjs.org/) & [Tailwind](https://tailwindcss.com/) installed.

## :memo: Contributors

These wonderful people have contributed to this project:

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/qbentil">
            <img src="https://avatars.githubusercontent.com/u/55560024?v=4" width="100;" alt="qbentil"/>
            <br />
            <sub><b>Bentil Shadrack</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->

## Project Maintainers

<!-- readme: collaborators -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/qbentil">
            <img src="https://avatars.githubusercontent.com/u/55560024?v=4" width="100;" alt="qbentil"/>
            <br />
            <sub><b>Bentil Shadrack</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators -end -->

## Changelog

## Contributing

## Tests

## Questions

## Issues
