import {useRef, useState, useEffect } from 'react'; // when we need to selct sometheing from  virtual DOM then we use this 
 // useState is the hook of react which is use to store any thing(file,image, etc)
 //useEffect - jaise he upload button click krke file select kiya waise he api call krna hai toh wo api call hum api ke help se kr skte hai

import './App.css';
import { uploadFile } from './services/api';

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(() => {
      const getImage = async () => {
        if (file) {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);

          const response = await uploadFile(data); // api uploadFile
          setResult(response.path);
          console.log(response);
        }
      }
      getImage();
  }, [file])

  // useEffect take 2 function first is callback function and second is empty array dependencies (empty array dependencies tb kaam krta h jb components pahli baar DOM me insert hota h) lekin yaha pr mere ko file me jb value change hogi tb bhi kholna hai isilye yaha pr empty array dependencies me file likha h 

  // const getImage is a function and it a asynchronous function (that's why we write await and use async)

  //  useeffect dono pr call hota h mount ans update lekin yaha pr unko sirf update pr he call krna h  

    const onUploadClick = () => {
      fileInputRef.current.click();       // fileinputref is a element which contain a key name current , DOM element comes from current keywords
    }
  

  return (
    <div className= 'container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
          <h1>Simple File Sharing</h1>
          <p>Upload and share the download link</p>

          <button onClick={()=> onUploadClick()}>Upload</button>
          <input type="file" 
            ref={fileInputRef} 
            style={{display: 'none'}}
            onChange={(e) => setFile(e.target.files[0])} 

            // here e means events, if we select any one of them inputtag,dropdown,checkbox, etc we write (e.target.value) but in the case of file we write (e.target.files) but here we only want to select single file that's why we we write (e.target.files[0]);
          />
          <a href={result} target ="_blank">{result}</a>
           
      </div>
    </div>
  );
}

export default App;
