import React from 'react'
import { transformImage } from '../../lib/features';
import { FileOpen as FileOpenIcon } from '@mui/icons-material';

const RenderAttachment = ({file,url}) => {
  switch (file) {
    case "video": 
        <video src={url} preload='none' width={"200px"} controls></video>
        break;

    case "image":
        <img src={transformImage(url,200)} 
        alt="attachment" 
        width={"200px"}
        height={"150px"}
        style = {{
            objectFit: "contain"
        }}
        />
        break;

    case "audio":
        <audio src={url} preload='none' controls></audio>
        break;

    default:
        <FileOpenIcon/>
        break;
  }
}

export default RenderAttachment

