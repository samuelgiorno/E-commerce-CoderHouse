import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {

  return (
      <div className='row col-12 text-center m-5'>
          <PropagateLoader color={"#003F4A"} loading={true}  size={15} />
      </div>
  )
}

export default Loader