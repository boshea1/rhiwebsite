import React from 'react'


const Card = (props) => {
  return (<>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={require(`../images/festival${props.no+1}.jpg`)} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.aa}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
  </>
  )
}

export default Card