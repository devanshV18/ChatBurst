import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorE1}) => {
  return (
    <div>
      <Menu anchorEl={anchorE1}>
        <div style={{
            width: "10rem", 
        }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reiciendis esse aspernatur recusandae laudantium corporis nesciunt magnam quam nisi iure!
        </div>
      </Menu>
    </div>
  )
}

export default FileMenu
