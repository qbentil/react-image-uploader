# React-Image-Uploader

## Description
An open source React and Tailwind package for image preview before upload.

## Installation

```npm install react-image-uploader --save```

## Usage

```jsx 
import React from 'react';
import ReactImageUploader from 'react-image-uploader';

const App = () => {
  return (
    <ReactImageUploader
      withIcon={true}
      buttonText='Choose images'
      onChange={(file) => console.log(file)}
      imgExtension={['.jpg', '.png']}
      maxFileSize={5242880}
      withPreview={true}
      singleImage={true}
      label='Max file size: 5mb, accepted: jpg, png'
    />
  );
}

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

## Contributors

- [Bentil Shadrack](https://github.com/qbentil


## Changelog

## Contributing


## Tests


## Questions


## Issues




