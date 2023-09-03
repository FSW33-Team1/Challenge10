import React from 'react';
import Image from 'next/image';
// import batu from '/images/batu.png';
import { asset_card, asset_home } from "/images/index.js";


function Footer() {
  return (
    <>
      <div>footer</div>
      <Image src={'/images/batu.png'} alt='batu.png' width='100' height='100'></Image>
    </>
	
  )
}

export default Footer