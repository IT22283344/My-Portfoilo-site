import React from 'react'
import { InfiniteMovingCards } from './InfiniteMovingCards'
import { testimonials } from '@/data'

function Clients() {
  return (
    <div className="py-20">
      <h1 className="heading">
        Responses from the {" "}
        <span className="text-purple"> Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10 ">
        <InfiniteMovingCards 
        items={testimonials}
        direction='right'
        speed='slow'/>
      </div>  
    </div>  

  )
}

export default Clients