import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/athu_service';
import CardRepository from './service/card-repository';
import ImageUploader from './service/imageUploader';
import ImageFileInput from './components/imageFileInput/imageFileInput';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
<ImageFileInput {...props} imageUploader={imageUploader} />
);


ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}
          FileInput={FileInput}
          cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
  
);
