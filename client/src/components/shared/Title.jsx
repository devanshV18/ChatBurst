import React from 'react'
import {Helmet} from "react-helmet-async"

const Title = ({title = "ChatBurst", description = "The real time chat app called ChatBurst"}) => {
  return (
   <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}/>
   </Helmet>
  )
}

export default Title
