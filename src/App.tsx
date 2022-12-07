import { useEffect } from 'react';
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
function App() {

  useEffect(() => {
    const image = document.getElementById('image') as unknown as HTMLImageElement;
    const cropper = new Cropper(image, {
      minCanvasWidth: 100,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });

  }, [])
  return (
      <img src='/logo.jpeg' id='image' />
  );
}

export default App;
