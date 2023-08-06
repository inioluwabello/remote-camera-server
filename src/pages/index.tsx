// pages/index.js
import React, { useEffect, useState } from 'react';


const App = () => {
  const [picture, setPicture] = useState(null);
  const [mobileData, setMobileData] = useState('')

  const io = require("socket.io-client");
  const SOCKET_URL = 'ws://https://remote-camera-server.vercel.app/:3002'; 

  const socket = io(SOCKET_URL, {
    withCredentials: true
  });

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('pictureTaken', (pictureData: any) => {
      setPicture(pictureData);
    });

    socket.on('test', (data: any) => {
      setMobileData(data.message);
    });
  }, []);

  const handleOpenCamera = () => {
    // Send a message to the React Native app to open the camera
    socket.emit('openCamera');
  };

  const handleTakePicture = () => {
    // Send a message to the React Native app to take a picture
    socket.emit('takePicture');
  };

  return (
    <div>
      <h1>{mobileData ? mobileData : 'Waiting for mobile'}</h1>
      <button onClick={handleOpenCamera}>Open Camera</button>
      <button onClick={handleTakePicture}>Take Picture</button>
      {picture && <img src={`data:image/jpeg;base64,${picture}`} alt="Taken" />}
    </div>
  );
};

export default App;
