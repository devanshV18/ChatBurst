import React, {memo} from 'react'
import {Link} from "../styles/StyledComponents"
import { Avatar, Typography, Stack, Box } from '@mui/material'

const ChatItem = ({avatar = [], name, _id, groupChat = false, sameSender, isOnline, newMessageAlert, index = 0, handleDeleteChat}) => {
  return (
    <Link to={`/chat/${_id}`} 
    onContextMenu={(e)=>handleDeleteChat(e, _id, groupChat)} 
    sx={{padding:"0"}}
    >
        <div style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "black",
            justifyContent: "space-between",
            position: "relative"
        }}>
            {/* <Avatar></Avatar> */}
            <Stack>
                <Typography>{name}</Typography>
                {
                  newMessageAlert && (
                    <Typography>
                      {newMessageAlert.count} New Message
                    </Typography>
                  )
                }
            </Stack>

            {
              isOnline && (
                <Box sx = {{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "green",
                  top: "50%",
                  right: "1rem",
                  transform: "translateY(-50%)"
                }}/>
              )
            }
        </div>
    </Link>
  )
}

export default memo(ChatItem)
