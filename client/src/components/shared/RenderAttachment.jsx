import { BreakfastDiningOutlined } from '@mui/icons-material'
import React from 'react'
import { transformImage } from '../../lib/features';

const RenderAttachment = ({file,url}) => {
  switch(file){
    case "video":
        <video src="url" preload='none' width={"200px"} controls></video>
        break;

    case "image":
        <img 
        src={transformImage(url)} 
        alt="attachment Image" 
        width={"200px"} 
        height={"150px"} 
        style={{
            objectFit: "contain"
        }} 
        />
        break

    default:
        break;
  }
}

export default RenderAttachment
