import React from 'react';

const Footer=()=>{
  const year =new Date().getFullYear();
  return (
    <>
    <footer>
    <p> copyright vivek singh © {year}</p>
    </footer>

    </>
  )
};

export default Footer;