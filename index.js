import React from 'react';
import ReactDOM from 'react-dom/client';
import Specializaion from './chapter_12/Specializaion';
import './index.css';

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    /*<React.StrictMode>*/  //저장->컴파일->렌더링 과정을 한번 더 검증하게 됨
      <div><Specializaion/></div>
    );
