"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
// All React Imports
import { useState } from 'react'
const page = () => {

  const [state,setState] = useState("Welcome");


  return (

    <>
      <Button>
        Click me Her
      </Button>
      <p className='text-red-600'></p>
    </>
  )
}

export default page
