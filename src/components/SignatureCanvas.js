import React, { Component, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import SignatureCanvas from 'react-signature-canvas';

const SC = () => {

  const sigRef = useRef();
  const [signature, setSignature] = useState(null);
  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
  }
  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
  }

  useEffect(() => {
    console.log(signature);
  }, [signature]);
  return <div>
    <SignatureCanvas 
      penColor="green"
      canvasProps={{className: 'signature'}}
      ref={sigRef}
      onEnd={handleSignatureEnd}
    />
    <button onClick={clearSignature}>Clear</button>
  </div>
} 

render(<SC />, document.getElementById('root'));

export default SC;