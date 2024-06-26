import React from 'react'
import { Grid, IconButton, Tooltip } from '@mui/material'
import {KeyboardBackspace as KeyboardBackspaceIcon} from '@mui/icons-material'
import { mattBlack } from '../constants/color'
import {useNavigate} from "react-router-dom"

const Groups = () => {

  const navigate = useNavigate()

  const navigateBack = () => {
    navigate("/")
  }
  const IconBtns = <>

    <Tooltip title="back">
      <IconButton
        sx = {{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          bgcolor: mattBlack,
          color: "white",
          ":hover" : {
            bgcolor: "rgba(0,0,0,0.7)",
          },
        }}
        onClick={navigateBack}
      >
        <KeyboardBackspaceIcon/>
      </IconButton>
    </Tooltip>

  </>

  return (
    <Grid
      container 
      height={"100vh"}
    >
      <Grid
        item
        sx = {{
          display: {
            xs: "none",
            sm: "block"
          }
        }}
        sm={4}
        bgcolor={"bisque"}
      >
        Group List
      </Grid>

      <Grid
        item
        xs = {12}
        sm = {8}
        sx = {{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem"
        }}
      >
        {IconBtns}
      </Grid>

    </Grid>
  )
}

export default Groups
