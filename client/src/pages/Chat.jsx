import React, {useRef} from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import {AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material'
import { gray } from '../constants/color'
import { InputBox } from '../components/styles/StyledComponents'
import FileMenu from '../components/dialogs/FileMenu'
import { sampleMessage } from '../constants/sampleData'
import MessageComponent from '../components/shared/MessageComponent'

const Chat = () => {

  const containerRef = useRef(null)

  const user = {
    _id: "adadmad",
    name: "Devansh Verma"
  }

  return (
    <>
      <Stack ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={gray}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >

        {
          sampleMessage.map((i) => (
            <MessageComponent message = {i} user={user}/>
          ))
        }


      </Stack>

      <form
      style={{height:"10%"}}
      >
        <Stack
        direction={"row"}
        height={"100%"}
        padding={"1rem"}
        alignItems={"center"}
        position={"relative"}
        >
          <IconButton
          sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg"
          }}

          
          >
            <AttachFileIcon/>
          </IconButton>

          <InputBox placeholder='Type message here...'/>

          <IconButton type='submit' 
          sx={{
            // rotate: "-30deg",
            backgroundColor: "#ea7070", 
            color: "white", 
            marginLeft: "1rem", 
            padding: "0.5rem",
            "&:hover":{
              bgcolor:"error.dark"
            }
            }}>
            <SendIcon/>
          </IconButton>
        </Stack>
      </form>

        <FileMenu/>
    </>
  )
}

export default AppLayout()(Chat)
