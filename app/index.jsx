/* eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/base";

import MandyComp from './components/MandyComp';

function Comp(){
  return (
      <div>
        <div>Hi</div>
        <MandyComp/>
      </div>
  );
}

ReactDOM.render(<Comp/>, document.getElementById('app'));
