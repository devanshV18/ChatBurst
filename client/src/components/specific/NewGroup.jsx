import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from "../shared/UserItem"
import {useInputValidation} from "6pp"

const NewGroup = () => {

  const groupName =   useInputValidation("")

  const [members, setMembers] = useState(sampleUsers)
  const [selectedMembers, setSelectedMembers] = useState([])

  const selectMemberHandler = (id) => {
    setSelectedMembers(prev => [...prev,id])
  }
  console.log(selectedMembers)

  const submitHandler = () => {

  }
  return (
    <Dialog open>
      <Stack p={{xs : "1rem", sm : "2rem"}} maxWidth={"25rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>

        <TextField value={groupName.value} onChange={groupName.changeHandler}/>

        <Typography variant='body1'>
          Members
        </Typography>

        <Stack>
          {
            members.map((i) => (
              <UserItem user={i} key={i._id} handler={selectMemberHandler}/>
            ))
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant='text' color='error' size='large'>Cancel</Button>
          <Button variant='contained' size='large' onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
