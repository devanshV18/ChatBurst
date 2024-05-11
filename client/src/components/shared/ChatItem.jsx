import React from 'react'
import {Link} from "../styles/StyledComponents"

const ChatItem = ({avatar = [], name, _id, groupChat = false, sameSender, isOnline, newMessage, index = 0, handleDeleteChatOpen}) => {
  return (
    <Link to={`/chat/${_id}`}>
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
            <Stack>
                <Typography>{name}</Typography>
                {

                }
            </Stack>
        </div>
    </Link>
  )
}

export default ChatItem
