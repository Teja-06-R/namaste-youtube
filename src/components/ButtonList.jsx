import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='sticky top-0 mt-5 bg-white z-40 flex '>
      <Button name={"All"}/>
      <Button name={"Movies"}/>
      <Button name={"Music"}/>
      <Button name={"New to you"}/>
      <Button name={"Skills"}/>
      <Button name={"Video Editing"}/>
      <Button name={"Programming"}/>
      <Button name={"React"}/>
      <Button name={"Watched"}/>
      <Button name={"Recently uploaded"}/>
    </div>
  )
}

export default ButtonList