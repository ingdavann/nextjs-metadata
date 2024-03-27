import React from 'react'
type ParamProps = {
    id: number,
}
const page = (params : ParamProps) => {
    const id = params.id;
  return (
    <div>
      ID is ${id}
    </div>
  )
}

export default page
